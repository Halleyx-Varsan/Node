<template>
    <div>
        <h2>{{ text }}</h2>
    <button @click="text = 'heh'">clickme</button>
    <br>
    <button @click="changeRoute">Home</button>
    </div>
   
</template>

<script>
export default{
    data(){
        return{
            text:"hello"
        }
    }, 
     methods: {
    changeRoute(){
      this.$router.push('/home');
    }
  },
    beforeUpdate(){
        // this.text="Before Update"
        console.log("I am before update");
    },
    updated(){
        // this.text="After updated"
        console.log("I am after Updated");
    },
    unmounted(){
        console.log("Component is unmounted or removed--Unmounted action");
    },
    beforeUnmount(){
        alert("component is going to be removed--Beforeunmount action")
    }
}
</script>

<style>
button{
padding: 10px 10px 10px 10px;
margin-bottom: 10px;
background-color: rgba(144, 238, 144, 0.676);
border:1px solid;
}
button:hover{
    cursor: pointer;
    background-color: rgb(144, 238, 144);
}
</style>
