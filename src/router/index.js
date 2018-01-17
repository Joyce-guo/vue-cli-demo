import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入组件
import HelloWorld from '../components/HelloWorld.vue'
import Link1 from "../components/link1.vue"
import Link2 from "../components/link2.vue"

let routes = [
  {path: '/', name: 'HelloWorld', component: HelloWorld},
  {path: '/link1', name: 'link1', component: Link1},
  {path: '/link2', name: 'link2', component: Link2}
]

export default new Router({
  routes
})
