<template>
  <div>
<computedComp></computedComp>
<watcher></watcher>
  <router-view></router-view>
  <props animal-name="Lion"
    description="Am I king?"/>
    <props animal-name="Tiger"
    description="Am I National animal?"/>


    <forComponent 
    v-for="x in list"  :key="x.name" :dev-name="x.name"
    :dev-position="x.position"/>


    <emitComponent @change="receiveEmit" />
  </div>

</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import computedComp from './computedAndWatchers/component.vue'
import watcher from './computedAndWatchers/watcherComponent.vue'
import Props from './props/propsPractice.vue'
import forComponent from './props/forComponent.vue'
import emitComponent from './props/emitComponent.vue'


export default {
  data(){
    return{
      list:[{
        name:"Varsan",
        position:"Software Developer"
      },
    {
      name:"Rock",
      position:"Designer"
    }]
    }
    
  },
 components:{
  computedComp,
  watcher,
  Props,
  forComponent,
  emitComponent
 },
  methods: {
  receiveEmit() {
    alert('Hello World! I am from parent component');
  }
}
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
