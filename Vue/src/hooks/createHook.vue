<template>
    <div>
        <h2>I am view</h2>
    <!-- <p>{{ text }}</p> -->
    <h3>Hello</h3>
    <p>Sample for creation hooks {{ text }}</p>
    </div>
   
    
</template>

<script>
export default{
data(){
    return{
        text:"Asif"
    }
},
created(){
    console.log("I am After create");
           this.text="After";
},
beforeCreate(){
            console.log("I am before create");
           this.text="Before";
}

}
</script>

<style scoped>

</style>
