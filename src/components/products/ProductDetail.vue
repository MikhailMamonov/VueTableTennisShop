<template>
 <div>
            
            <div class = "product__container">
              <img :src="product.image" alt="">
              <h1> {{ product.label}}</h1>
              <p>{{product.description}}</p>
              <button  v-on:click="backToProducts($event)">Назад</button>
            </div>
        </div>
</template>

<script>
export default {
    name: "product-details",
    methods:{
      backToProducts: function(){
            
            this.$router.push({
                name: "products"
      });
      }
    },
    computed: {
      productId () {
                    return +this.$route.params.id;
                },
                product () {
                  return this.$store.getters.getProductById(this.productId);
                    
                }
            }
}
</script>

<style lang= "scss">

.product__container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 200px;
    height: 200px;
  }

  p{
    font-family: "Myriad Pro", "sans-serif";
    font-size: 20px;
    margin: 10px;
    padding: 20px;
    color: #BE2D0F;
  }

  button{
    align-self: flex-end;
    background-color: aquamarine;
    font-size: 50px;

    &:hover{
    background-color: blue;
  }
  }
}

</style>