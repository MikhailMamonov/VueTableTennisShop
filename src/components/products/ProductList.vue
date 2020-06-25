<template>
  <div class="product__wrapper">
    
    <ul class="content__main">
      <li v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </li>
    </ul>
   
  </div>
</template>
<script>
import ProductItem from "./ProductItem";

export default {
  name: "product-list",
  components: {
    ProductItem
  },
  props: ["products"],

  computed: {
    
    filteredProducts() {
      let filteredProducts = this.$store.state.products.filter(
        ({ category }) =>
          this.$store.state.displayCategory === category ||
          this.$store.state.displayCategory === 0
      );
      debugger;
      filteredProducts = filteredProducts.filter(
        ({ brand }) =>
          this.$store.state.displayBrand === brand ||
          this.$store.state.displayBrand === 0
      );
      debugger;
      return filteredProducts;
    },
  },
};
</script>

<style>
.product__wrapper {
  text-align: center;
  overflow-y: scroll;
  position: absolute;
  display: contents;
}

.content__main {
  height: 100%;
  list-style-type: none;
  background: rgb(38, 38, 209);
  text-align: center;
  margin-left: 0;
  margin-top: 100px;
  padding-left: 0;
  list-style: none;
  display: flex;
  height: fit-content;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.content__main li {
  display: inline-flex;
  margin: 20px;
  border-color: red;
  border-radius: 15px;
  border: 1px solid red;
  position: inherit;
}

</style>
