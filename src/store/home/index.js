// home 模块仓库
import { reqCategoryList } from '@/api'
import { reqGetBannerList } from '@/api'

const state = {
    categoryList: [],
    bannerList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }

}
const actions = {
    async categoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.status === 200) {
            commit('CATEGORYLIST', result.data.typeNav)
        }
    },
    async getBannerList({ commit }) {
        const result = await reqGetBannerList();
        if (result.status === 200) {
            commit('BANNERLIST', result.data.data)
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