import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import Design from '../views/Design.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
