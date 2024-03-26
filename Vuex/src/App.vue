<template>
  <div>
    <async></async>
    <computedComp></computedComp>
    <watcher></watcher>
    <router-view></router-view>
    <props animal-name="Lion" description="Am I king?" />
    <props animal-name="Tiger" description="Am I National animal?" />

    <forComponent v-for="x in list" :key="x.name" :dev-name="x.name" :dev-position="x.position" />

    <emitComponent @change="receiveEmit" />

    <vuecomponent></vuecomponent>
    <vuecomponent>Hello I am from slots</vuecomponent>
    <vuecomponent>
      <p>I am here</p>
      <!-- v-slot: or #  -->
      <!-- If you predined name in the slot component then you can use  
      #descSlot like this else use v-slot="newname"-->
<!-- # or v-slot -->

      <template #descSlot> 
        <h2>Named Slot</h2>
        <p>
          Inside template tag inside your slot to tag add more tags
        </p>
      </template>
    </vuecomponent>

    <vuecomponent>'I am default slot not in parent'</vuecomponent>
    <vuecomponent v-slot="dataFromSlot">
      <!-- <template v-slot="dataFromSlot"> -->
        <h1>{{ dataFromSlot.InfoData }}</h1>
      <!-- </template> -->
    </vuecomponent>

    <vuecomponent ><template v-slot:array="employ">
    <h2>{{employ.employName}}</h2>
     <p>{{ employ.Position }}</p>
     </template>
  </vuecomponent>
<!-- If given name in the slots component " name="array" .   name="sample" " 
like this then u must use template v-slot to get the info from stored data section
 -->
  <vuecomponent><template v-slot:sample="data">
    <div>{{ data.text }}</div>
    </template>
  </vuecomponent>

<vuecomponent>
  <div>I am here</div>
</vuecomponent>
<tick></tick>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import computedComp from "./computedAndWatchers/component.vue";
import watcher from "./computedAndWatchers/watcherComponent.vue";
import Props from "./props/propsPractice.vue";
import forComponent from "./props/forComponent.vue";
import emitComponent from "./props/emitComponent.vue";
import vuecomponent from "./VueSlots/basicSlots.vue";
import tick from './VueSlots/nextTick.vue'

import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      list: [
        {
          name: "Varsan",
          position: "Software Developer",
        },
        {
          name: "Rock",
          position: "Designer",
        },
      ],
    };
  },
  components: {
    computedComp,
    watcher,
    Props,
    forComponent,
    emitComponent,
    vuecomponent,
    tick,
    'async':defineAsyncComponent(()=>import('./VueSlots/asyncComp.vue'),
    alert("I am aync"))
  },
  methods: {
    receiveEmit() {
      alert("Hello World! I am from parent component");
    },
  },
};
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
