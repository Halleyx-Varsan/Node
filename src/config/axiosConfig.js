
import axios from 'axios';
const studentServer=axios.create({
    baseURL:process.env.VUE_APP_STUDENT_SERVER
})


export default studentServer

