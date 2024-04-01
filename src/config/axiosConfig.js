
import axios from 'axios';
const studentServer=axios.create({
    baseURL:process.env.VUE_APP_STUDENT_SERVER
})

const agentServer=axios.create({
    baseURL:process.env.VUE_APP_AGENT_SERVER
})

export {studentServer,agentServer}