<template>
  <div>
    <h2>{{ message }}</h2>
  <button @click="change">Click Me</button>
  </div>
 
</template>

<script>
export default {
  data(){
    return{
      message:"Hello"
    }
  },
methods:{
    change(){
      console.log("I am from chils emit");
        this.$emit('change',this.message="I am changed from child component");
    }
}
}
</script>

<style>

</style>