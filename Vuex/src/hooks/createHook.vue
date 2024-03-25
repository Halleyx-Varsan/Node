<template>
    <div>
        <h2>I am view</h2>
    <!-- <p>{{ text }}</p> -->
    <h3>Hello</h3>
    <p>Sample for creation hooks {{ text }}</p>
    <h4 :id="color">{{ text }}</h4>
    </div>
   
    
</template>

<script>
export default{
data(){
    return{
        text:"Asif"
    }
},
beforeCreate(){
            console.log("I am before create");
           this.text="Before";
},
created(){
    console.log("I am After create", this.text="After");
          
},mounted(){
    alert("I am mount")
        console.log("I am mounted method");

        this.text="hello mounted",
        this.color='color-change'
    },

    beforeMount(){
        console.log("I am beforeMount method");
        this.text="hello beforeMount",
        this.color='color'
    }


}
</script>

<style>
#color{
    color:blue;
}
#color-change{
    color: red;
}
</style>
