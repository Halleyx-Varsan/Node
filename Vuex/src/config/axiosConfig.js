import axios from 'axios'
const studentServer = axios.create({
    baseURL: 'http://localhost:3000',
   
  });
  // const a = 2
  // export {studentServer, a }
  export default studentServer

