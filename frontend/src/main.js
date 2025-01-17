import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CalendarComponent from './components/Student/Activities/CalendarComponent.vue'

createApp(App).use(store).use(router).component('CalendarComponenet', CalendarComponent).mount('#app')
