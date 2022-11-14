// home 模块仓库
import { reqCategoryList } from '@/api'

const state = {
    categoryList: ['a']
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
}
const actions = {
    async categoryList({ commit }) {
        const result = await reqCategoryList();
        console.log(result);
        if (result.status === 200) {
            commit('CATEGORYLIST', result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}