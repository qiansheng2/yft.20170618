import Vue from 'vue';

export default {
  initYftTop({commit}) {
    // console.log('initYftTop():' + commit)
    return Vue.http.get('/api/initYftTop')
      .then(response => response.json())
      .then(customers => {
        commit('SET_CUSTOMERS', customers)
      })
  }
};
