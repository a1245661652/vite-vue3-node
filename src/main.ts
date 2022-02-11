import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store'
import App from './App.vue'
import styleImport from './utils/style-import'
import '@/style/basic.styl'

const app = createApp(App)
app.use(ElementPlus)
styleImport(app).use(router).use(store).mount('#app')
