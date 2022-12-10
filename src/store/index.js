import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 引入小仓库
import search from './search'
import home from './home'
import detail from './detail'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail
    }
})