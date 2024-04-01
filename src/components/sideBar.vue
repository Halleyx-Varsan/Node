<template>
  <div class="left-container">
    <section class="company-logo">
      <img src="../assets/halleyx.png" />
    </section>
    <section class="optionandexit">
      <section class="option">
        <span><img src="../assets/icon-primary.png" /></span>
        <span><img src="../assets/icon-primary.png" /></span>
      </section>
      <section class="exit">
        <span><img src="../assets/icon-primary.png" /></span>
        <span><img src="../assets/icon-primary.png" /></span>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

.left-container {
  background-color: #001723;
  height: 100vh;
  width: 68px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:8px 0 8px 0;

  span {
  transition: background-color 4.15s, opacity 4.15s; 

  :hover {
    cursor: pointer;
    box-shadow:hsla(240, 5%, 41%, .2) 0px 7px 29px 0px;
    opacity: 0.5;
  }

  :focus {
    background-color: #54bd95;
  }
}


  .company-logo img{
    height: 38px;
  }

   img{
    height: 40px;
    width: 100%;
    display: block;
    margin: 10px 0 10px 0;
    object-fit: contain;
  }
  .company-logo {
    margin: 10px 0 10px 0;
  }
  .optionandexit{
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .exit{
    padding-bottom: 20px;
  }
  
 
}
</style>