import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vuex from './vuex'; 

import store from './store'; 
createApp(App).use(router).use(store).mount('#app')
