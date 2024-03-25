<!-- <template>
    <div>
        <h2>Helo comp</h2>
        <input v-model="inputname">
        <p>{{ inputname }}</p>
        <P>{{ fullName }}</P>
        <p>{{ lastName }}</p>
    </div>
</template>

<script>

const inputname =('Wick')
const firstName = ('John')
const lastName = ('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value} ${inputname.value}`
})

console.log(fullName.value) 
firstName.value = inputname.value
lastName.value = 'Smith'
console.log(fullName.value)

const name=document.createElement("h1")
name.textContent=inputname.value
document.body.append(name)

</script>

<style>

</style> -->
<!-- <template>
  <div>
    <p>Base price: {{ basePrice }}</p>
    <p>Discount Percent: {{ discount }}</p>
    <p>Total price: {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basePrice: 100,
      discount: 10
    };
  },
  computed: {
    // Computed property for calculating the discounted price
    discountedPrice() {
      return this.basePrice * (1 - this.discount / 100);
    },
    // Computed property for calculating the total price after discount
    totalPrice() {
      return this.discountedPrice;
    }
  }
};
</script> -->

<!-- 
<template>
  <div>
    <p>Total Computed Method :{{ computedProperty }}</p>
    <p>Method Total :{{ methodProperty() }}</p>
    <button @click="items.push({id:4,price:50,productName:'Keyboard'})">Add Product</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5,
      items:[
        {
          id:1,
          price:10,
          productName:"Pen"
        },
        {
          id:2,
          price:20,
          productName:"Glass Pot"
        },
        {
          id:3,
          price:30,
          productName:"Picture"
        }
      ]
    };
  },
  computed: {
    computedProperty() {
      console.log("I am computed");
      return this.items.reduce((total,curr)=>(total=total+curr.price),0)
    }
  },
  methods:{
    methodProperty() {
      console.log("I am methods");
      return this.items.reduce((total,curr)=>(total=total+curr.price),0)
    }
  }

};
</script> -->

<template>
  <div>
    <p>Total Price (Computed): {{ totalPrice }}</p>
    <!-- <p>Methods: {{ totalPriceMethod() }}</p> -->
    <button  @click="applyDiscount">Apply Discount</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basePrice: 100,
      discount: 10,
      a: 1
    };
  },
  computed: {
    totalPrice() {
      let b=this.a
      console.log("i am computed from ",b);
      return this.basePrice * (1 - this.discount / 100);
    }
  },
  methods: {
    applyDiscount() {
      // Apply a discount by increasing the discount value
      console.log("I am from button methods", this.a++);
      this.discount += 5;
    }
    
    // totalPriceMethod() {
    
    //   // console.log("I am from methods", this.a++);
    //   let b=this.a
    //   console.log("i am Method",b);
    //   return this.basePrice * (1 - this.discount / 100);
    // }
  }
};
</script>

<style scoped>

</style>