// home 模块仓库
import { reqCategoryList } from '@/api'

const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
}
const actions = {
    async categoryList({ commit }) {
        const result = await reqCategoryList();
        console.log(result.data.typeNav);
        if (result.status === 200) {
            commit('CATEGORYLIST', result.data.typeNav)
        }
    }
}
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}