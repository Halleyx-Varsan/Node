# Vuex

**=>** Serves as a centralized store for all the components in an application.

## Installation

```bash
# Before that install Node,npm,Vue packages
npm i vuex
```
## After installation
```JS
// Add this in your main.js file to mention that we are using Vuex 
// ./store represents the folder name that contains the our vuex file.
import store from './store'; 

//Use this to our main app
createApp(App).use(router).use(store).mount('#app')
```
## Concepts
```JS
// import this createstore from our Vuex package

import { createStore } from 'vuex'

export default createStore({
    state: {
        // To represent the variables like we did in our vue components inside the data function.

      count: 0,
      user:{
        {
        name:'Varsan',
        age:21
        },
         {
        name:'Sakthi',
        age:23
        }
      }
    },

    mutations: {

        // Mutations are synchronous functions responsible for modifying the state in Vuex.

        // Here count is modified. Using the increment and decrement function.
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      }
    },

    actions: {
        // Actions are asynchronous functions.
      asyncIncrement(context) {
        setTimeout(() => {
          context.commit('increment');
        }, 4000);
      }
    },
    getters: {
        // Computed properties for Vuex store
      doubleCount(state) {
        return state.count;
      }
    }
  });
```

# Types of getting values Vuex 
## Type--1
## Commit 
**=>** The commit method is used to trigger ``` Mutations```.

```JS
// For getting the mutation function
$store.commit('increment');
```
## Dispatch
**=>** The dispatch method is used to trigger ```Actions```.

```JS
// For getting the action function
$store.dispatch('asyncIncrement');
```
## Type--2
```JS
  <script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    export default {
    name: 'MyComponent',
    // computed is to get update when depedency change
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
```
```HTML
<!-- Get through above import method -->
<p>Count:{{count}}</p>
<button v-on:mousemove='decrement'>Decrement</button>
<button>{{ doubleCount }}</button>
<button @click='asyncIncrement'>Async Increment</button>
<button v-on:mousemove="doubleCountAction">DoubleCount</button>

```

