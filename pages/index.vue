<template>
  <Tutorial :products="products" />
</template>

<script>

export default{
  name: 'IndexPage',
  async asyncData({ $axios }){
      try{
        const response = await $axios.$get("/api/products");
        return{
           products:response.products
        }
      } catch (err){
          console.log(err)
      }
  }
}
</script>
