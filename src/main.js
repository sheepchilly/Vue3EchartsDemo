import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入自适应配置
import "lib-flexible/flexible.js"

createApp(App).use(store).use(router)
.mount('#app')
