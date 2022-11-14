import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 引入小仓库
import search from './search'
import home from './home'

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})