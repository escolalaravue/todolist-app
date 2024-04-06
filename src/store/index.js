import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/user';

Vue.use(Vuex);

// eslint-disable-next-line
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user,
    },
});
