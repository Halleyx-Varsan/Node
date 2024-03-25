<template>
    <div>
      <p>Count:{{count}}</p>
      <!-- <p>getters: {{ $store.getters.doubleCount }}</p> -->
      <p>Double Count: {{ $store.getters.doubleCount }}</p>
      <button @click="$store.commit('increment')">Increment</button>
      <button v-on:mousemove='decrement'>Decrement</button>
      <!-- <button @click='doubleCount'>DoubleCount</button> -->
      <button>{{ doubleCount }}</button>
      <button @click='asyncIncrement'>Async Increment</button>
      <button v-on:mousemove="doubleCountAction">DoubleCount</button>

    </div>
  </template>
  
  <script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'MyComponent',


  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapActions(['asyncIncrement']),
    ...mapMutations(['increment', 'decrement']),
    doubleCountAction() {
      console.log("I am from methods - child element");
      this.increment();
    }
  }

  }

  </script>
  
<!--    
   <template>
    <div>
      <p>Count :{{ $store.state.count }}</p>
     <p>getters :{{ $store.getters.doubleCount }}</p>
     <button @click="$store.commit('increment')">Add</button>
    </div>
     
   </template>
   
   <script>
   export default {
   name:'myComponent'
   }
   </script>
   
   <style>
   
   </style> -->


   