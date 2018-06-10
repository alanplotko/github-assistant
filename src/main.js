// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fontawesome from '@fortawesome/fontawesome';
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch';

import App from './App';
import router from './router';
import NavBar from './components/NavBar';

fontawesome.library.add(faCodeBranch);

Vue.config.productionTip = false;

Vue.component('nav-bar', NavBar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
