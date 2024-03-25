<template>
  <div>
    <h3>I am from 1st div</h3>

        <!-- Dynamic styling -->
    <h3 :style="{fontSize:18+'px',backgroundColor:'lightblue'}">I am from 2st div</h3>

       <!-- Dynamic image source -->
    <img :src="img">
  
       <!-- Dynamic class binding -->
    <h3 :class="name">I am from 2st div</h3>

     <!-- Conditional -->
    <p v-if=isTotal>I am if statement</p>
    <p v-else>I am else statement</p>

     <!-- Method to toggle conditional -->
    <button @click="change()">Change Statement</button>
    <div v-show="show">You can hide me by changing values in the method</div>
    <p>{{ "count: " + count }}</p>

     <!-- Button to increase count -->
  <button v-on:click="count++">Increase Value</button><br>
      <!-- Button to decrease count -->
  <button v-on:click="(count<=0)?count=0:count--">Decrease Value</button>

<h4>Hover Below Button v-on:mousemove</h4>

    <p>{{ "Value:" +value }}</p>
  <button v-on:mousemove="value+=10">Increase Value</button><br>

  <button v-on:mousemove="(value<=0)?value=0:value-=10">Decrease Value</button><br>


  <ul>
    <li v-for="food in Foods" :key="food.id">
      {{ food.name }}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
data(){
  return{
    name:"style-header",
    img:"https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600",
    isTotal:false,
    show:true,
    count:0,
    value:0,
      Foods: [
          {name: 'PizzA'},
          {name: 'Sambar'},
          {name: 'Burger'},
          {name: 'Rasam'}
        ]
  }
},
methods:{
  change(){
    this.isTotal=!this.isTotal
  }
}
}
</script>

<style>
.style-header{
  background-color: darkcyan;
}
</style>