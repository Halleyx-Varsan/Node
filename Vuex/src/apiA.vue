<template>
  <div>
    <h1>Data:</h1>
    <p>{{ responseData }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; 

import  studentServer from '@/config/axiosConfig'
console.log(studentServer,'exported')
export default {
  setup() {
    const responseData = ref(null);


    const fetchData = async () => {
      try {
        const response = await studentServer.posts('/subjects', {"name": "Mathematics",
        "id": "MATH101"}) ; 
        responseData.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    onMounted(fetchData);

    return {
      responseData
    };
  }
};
</script>

<style>

</style>
