# Overview
   **1)** Slots

**2)** Async Components

**3)** next tick
# Slots in Vue Components

Slots in Vue.js acts as an providing placeholders for dynamic content. 

# Default Slot

The default slot is used when no specific slot is provided.

```vue
<template>
  <div>
    <slot>I am default text</slot>
  </div>
</template>
```

## Usage

```vue
<template>
  <div>
    <!-- If there is no value inside the slot then it takes the 
    default value given in the slot component -->
    <vuecomponent></vuecomponent>

<!-- For below slot component it doesn't take default value -->
     <vuecomponent>I am from App.vue</vuecomponent>
  </div>
</template>
import vuecomponent from "./VueSlots/basicSlots.vue";
 components: {
    vuecomponent
  }
```
# Named Slots
**=>** Named slots allow you to define multiple slots with different names.

```vue
<template>
  <div>
     <slot name="descSlot"></slot>
  </div>
</template>

```
## Usage

 **1.** v-slot:Slotname or #Slotname 
      
 **2.**  If you predined name in the slot component then you can use #descSlot like this else use v-slot="newname"


```vue
  <vuecomponent>
      <template #descSlot> 
        <h2>Named Slot</h2>
        <p>
          Inside template tag inside your slot to tag add more tags
        </p>
      </template>
```

# Scoped Slots

**1.** Scoped slots enable passing data from the parent component to the slot content.

```Vue
<slot v-bind:InfoData="data"></slot>
 <slot v-for="x in employess"
    name="array"
    :key="x.name"
    :employName="x.name"
    :Position="x.position"></slot>

    export default {
  data(){
    return{
    data:"7",
    Text: 'This text belongs to none.',
    employess:[
      {name:'Bill gates',position:'Microsoft'},
      {name:'Ambani',position:'Reliance'}
    ]
  }  
  }
};
```
## Usage

```vue
<vuecomponent v-slot="dataFromSlot">
        <h1>{{ dataFromSlot.InfoData }}</h1>
    </vuecomponent>

    <vuecomponent ><template v-slot:array="employ">
    <h2>{{employ.employName}}</h2>
     <p>{{ employ.Position }}</p>
     </template>
  </vuecomponent>
```


# Async Components

Async components in Vue.js allow you to load a component asynchronously.

```JS
<async></async>  //component name used in our component

import { defineAsyncComponent } from "vue";

components:{
    'async':defineAsyncComponent(()=>{
        import ("./VueSlots/asyncComp.vue") // any thing that want to occur.
    })
}
```
