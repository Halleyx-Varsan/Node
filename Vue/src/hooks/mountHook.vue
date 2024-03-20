<template>
   <div>
     <h3>I am Vue</h3>
    <h4 :id="color">{{ text }}</h4>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            text:"hello",
            color:""
        }
    },mounted(){
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

<style scoped>
#color{
    color:blue;
}
#color-change{
    color: red;
}

</style>

