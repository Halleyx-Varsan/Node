<!-- <template>
    <div>
      <input v-model="message" placeholder="Type something">
      <p>Message: {{ message }}</p>
      <p>Message length: {{ messageLength }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: ''
      };
    },
    watch: {
      message(newValue) {
        console.log('Message changed:', newValue);
      }
    },
    computed: {
      messageLength() {
        return this.message.length;
      }
    },
 
  };
  </script>

  <style scoped>
  
  </style> -->

  <template>
    <div>
      <h3>{{Header}}</h3>
      <button @click="Header='Button clicked'">Change text</button>
      <h4>{{ textChanged }}</h4>
      <input v-model="input">
      <p>{{ input }}</p>

    </div>
  </template>

  <script>
  export default{
    data(){
      return{
        Header:"I am gonna change",
        input:"Type"
      }
    },
    watch:{
      Header(oldValue,newValue){
        console.log("Header message altered from",newValue,"to",oldValue);
        return this.textChanged=(`${oldValue} is to ${newValue}`)
      }
    }
  }
  </script>
  
  