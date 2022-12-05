// search 模块仓库
import { reqGetSearchInfo } from "@/api"

const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.status === 200) {
            commit('GETSEARCHLIST', result.data.data)
        }
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    information(state) {
        return state.searchList.information || [];
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}