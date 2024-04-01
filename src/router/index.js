import { createRouter,createWebHistory } from "vue-router";

// import home from "@/components/HelloWorld.vue";

import studentdb from '@/views/studentData.vue'
import agentdb from '@/views/agentData.vue'
const routes=
[
    
    {
        path:'/student',
        name:'studentdb',
        component:studentdb
    },
    {
        path:'/agent',
        name:'agentdb',
        component:agentdb
    }
]

const router=createRouter({
    history:createWebHistory(),routes
})

  
  export default router;

