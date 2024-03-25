import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HelloWorld.vue'; // Import your components
import create from '../hooks/createHook.vue'
import mount from '../hooks/mountHook.vue'
import update from '../hooks/updateHook.vue'
import basic from '../computedAndWatchers/basicMethods.vue'
import props from '../props/propsPractice.vue'
import forComponent from '../props/forComponent.vue'
// import vuex from '../vuex/vuex.vue'
// import Vuex from '../vuex/basic.vue';
import vuex from '../components/basic.vue';

// import About from './components/About.vue';
// Add more imports for your components as needed

const routes = [
  
  {
    path: '/home',
    name: 'HelloWorld',
    component: Home
  },
  {
    path:'/create',
    name:'createHook',
    component:create
  },
  {
    path:'/mount',
    name:'mounthook',
    component:mount
  },
  {
    path:'/update',
    name:'update',
    component:update
  },
  {
    path:'/basic',
    name:basic,
    component:basic
  },
  {
    path:'/props',
    name:props,
    component:props
  },
  {
    path:'/props',
    name:props,
    component:forComponent
  },
  {
    path:'/vuex',
    name:vuex,
    component:vuex
  }
  // Add more route configurations as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
