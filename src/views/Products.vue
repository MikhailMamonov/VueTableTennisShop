<template>
  <div>
      <div>
          <product-navbar :categories="categories" :brands="brands"></product-navbar>
      </div>
      <div>
          <product-list :products="filteredProducts"></product-list>  
      </div>
  </div>
</template>

<script>
import ProductNavbar from "../components/products/ProductNavbar";

import ProductList from "../components/products/ProductList";

export default {
    name: "allProducts",
    components: {ProductList, ProductNavbar},
    data() {
        return{
          products: this.$store.state.products,
          categories: this.$store.state.categories,
          brands: this.$store.state.brands,
          displayCategory: this.$store.state.displayCategory,
    }},
    computed: {
    
    filteredProducts() {
      let filteredProducts = this.$store.state.products.filter(
        ({ category }) =>
          this.$store.state.displayCategory === category ||
          this.$store.state.displayCategory === 0
      );
      filteredProducts = filteredProducts.filter(
        ({ brand }) =>
          this.$store.state.displayBrand === brand ||
          this.$store.state.displayBrand === 0
      );
      return filteredProducts;
    },
  },
}
</script>

<style>

</style>