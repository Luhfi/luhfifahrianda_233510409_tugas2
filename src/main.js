import { createApp } from 'vue'
import router from './router'
import MainLayout from './MainLayout.vue'
//import './style.css'


createApp(MainLayout).use(router).mount('#app')