import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from 'vue3-mq'

const app = createApp(App)

app.use(router)
app.use(Vue3Mq, {
    breakpoints: {
        sm: 0,
        md: 768,
    }
})
app.mount('#app')
