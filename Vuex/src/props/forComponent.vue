<template>
  <div>
    <h1>{{devName}}</h1>
    <h2>=>{{ devPosition }}</h2>
  </div>
</template>

<script>
export default {
props:{devName:String,devPosition:String}
}
</script>

<style>
h2,h1{
  display:inline;
}
</style>