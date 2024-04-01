<template>
  <div class="layout">

    <sidebar></sidebar>
    <router-view></router-view>
    
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import sidebar from '@/components/sideBar.vue';
export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
body {
overflow: hidden;
display: flex;
margin: 0px;
}
.layout{
display: flex;
}
</style>
