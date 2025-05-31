import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Declarative from '../views/Declarative.vue'
import Attribute from '../views/Attribute.vue'
import Form from '../views/Form.vue'
import Conditional from '../views/Conditional.vue'
import List from '../views/List.vue'
import Computed from '../views/Computed.vue'
import Lifecycle from '../views/Lifecycle.vue'
import Watchers from '../views/Watchers.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/declarative', name: 'Declarative', component: Declarative },
  { path: '/attribute', name: 'Attribute', component: Attribute },
  { path: '/form', name: 'Form', component: Form },
  { path: '/conditional', name: 'Conditional', component: Conditional },
  { path: '/list', name: 'List', component: List },
  { path: '/computed', name: 'Computed', component: Computed },
  { path: '/lifecycle', name: 'Lifecycle', component: Lifecycle },
  { path: '/watchers', name: 'Watchers', component: Watchers }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
