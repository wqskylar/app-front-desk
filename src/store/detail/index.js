import { reqGetDetail } from "@/api"

const state = {
    detail: {}
}
const mutations = {
    GETDETAIL(state, detail) {
        state.detail = detail;
    }
}
const actions = {
    async getDetail({ commit }) {
        let result = await reqGetDetail(100);
        if (result.status === 200) {
            commit('GETDETAIL', result.data)
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