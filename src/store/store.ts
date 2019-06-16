import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  // 存放的数据状态 不可以直接修改里面的数据。
  state: {
    isRead:true,
  },
  // mutations定义的方法动态修改Vuex 的 store 中的状态或数据。
  mutations:{
    pageReload(state){
      state.isRead = false;
      setTimeout(()=>{state.isRead = true;},500);
    }
  },
  actions: {

  },
});
