import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/tailwind.css"
import axios from "axios"
import VueCoreVideoPlayer from 'vue-core-video-player'
import moment from 'moment'
Vue.prototype.moment = moment
Vue.use(VueCoreVideoPlayer)
Vue.config.productionTip = false

const base = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

Vue.prototype.$http = base;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
