import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
// import router from './router/index'
import store from './store/index.ts'
import 'element-plus/dist/index.css'

createApp(App).use(store).mount('#app')
