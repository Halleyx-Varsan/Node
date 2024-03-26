<template>
    <div>
        <h3>{{ message }}</h3>
  <button @click="change">Change Text</button>
    </div>

</template>

<script>
export default {
data(){
    return{
        name:"tick",
        message:"I am number one",
        toggle:true
    }
},

methods:{
change(){
    console.log("Before");
    this.toggle?this.message="I am number one":this.message="I am number two";
    console.log("After");
    this.$nextTick(()=>{
        console.log("Text changed..");
    })
    this.toggle=!this.toggle
}
}
}
</script>

<style>

</style>

<!-- 
<template>
    <div>
      <h3>Items</h3>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ],
        newItemId: 4
      };
    },
    methods: {
      addItem() {
        const newItem = { id: this.newItemId, name: `Item ${this.newItemId}` };
        this.items.push(newItem);
        this.newItemId++;
        this.$nextTick(() => {
          document.querySelector(`li:nth-child(${newItem.id})`);
          console.log("After dom");
        });
      }
    }
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>
  

<template>
    <div>
      <h3>Items</h3>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ],
        newItemId: 4
      };
    },
    methods: {
      addItem() {
        const newItem = { id: this.newItemId, name: `Item ${this.newItemId}` };
        this.items.push(newItem);
        this.newItemId++;
        this.$nextTick(() => {
          document.querySelector(`li:nth-child(${newItem.id})`);
          console.log("After dom");
        });
      }
    }
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>

   <template>
    <div>
      <div ref="myElement">This is a DOM element</div>
      <button @click="updateElement">Update Element</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      updateElement() {

        this.$refs.myElement.classList.add('highlight');
  
   
        this.$nextTick(() => {
        
          const elementWidth = this.$refs.myElement.offsetWidth;
          console.log('Element width:', elementWidth);
        });
      }
    }
  };
  </script>
  
  <style>
  .highlight {
    background-color: yellow;
  }
  </style>
   -->