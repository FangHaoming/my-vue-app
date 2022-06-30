import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Second from './second'

Vue.use(Router)

const outRouter = new Router({
  mode: 'history',
  routes: [
    ...Home,
    ...Second,
  ],
})

export default outRouter