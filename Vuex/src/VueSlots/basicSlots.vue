<template>
  <div>
    <h4>Slots in Vue</h4>
    <slot>I am default text</slot>
 
    <!-- <hr style="color: blueviolet;border: 3px solid;"> -->
    <slot name="descSlot"></slot>
<!-- v-bind:InfoData or :InfoData -->
    <slot v-bind:InfoData="data"></slot><br>
    <br>
    <slot v-for="x in employess"
    name="array"
    :key="x.name"
    :employName="x.name"
    :Position="x.position"></slot>
    <hr>

    <slot 
        name="sample"
        :text="Text"
    ></slot>
  </div>
</template>

<script>
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
</script>

<style scoped>
slot{
  height: 30px;
  width: 50%;
  border: dotted black 1px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
  font-weight: bold;
}
</style>