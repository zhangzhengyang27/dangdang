import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log('环境变量:', import.meta.env.VITE_username)
console.log('环境变量:', import.meta.env.VITE_age)

createApp(App).mount('#app')
