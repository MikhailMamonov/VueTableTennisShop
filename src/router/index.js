import Vue from 'vue'
import VueRouter from 'vue-router'
import allProducts from './../views/Products.vue'
import Home from "./../views/Home"
import ProductDetails from './../components/products/ProductDetail'
import allRankings from './../views/Rankings.vue'
import rankingByStats from "./../components/rankings/SortByStats.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/', name: "home", component: Home } ,
    { path: '/products', name: "products", component: allProducts },
    { path: '/products/:id', name: 'productDetails', component: ProductDetails
    },
    {path: '/rankings', name: "rankings", component: allRankings},
    {path: '/rankings/:categoryId', name: "rankingByStats", component: rankingByStats}
  ]
  

  export default new VueRouter({routes})