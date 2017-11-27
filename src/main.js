import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Bendalloy from 'bendalloy';
import 'bendalloy/dist/bendalloy.css';
import App from './App.vue';
import Home from './components/Home.vue';
import './assets/less/style';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Bendalloy);

Vue.config.debug = DEBUG_MODE;
Vue.config.devtools = DEBUG_MODE;
Vue.config.productionTip = DEBUG_MODE;

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});

// Vue is a constructor and needs to be called with 'new'
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
