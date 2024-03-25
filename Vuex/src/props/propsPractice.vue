<template>
  <div>
    <h1>{{ animalName }}</h1>
  <h3>{{ description }}</h3>
  </div>
  
</template>

<script>
export default {
props:[
  {
    name:'animalName',
    type:String
    },{
    name:'description',
    type:String
    }
      ]
}
</script>

<style>

</style>