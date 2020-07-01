<template>
  <div class="hhiiuhu">
    <ul class="nav__wrapper">
      <li
        class="nli"
        v-for="category in categories"
        :key="category.id"
        v-on:click="selectCategory($event, category.id)"
      >
        <div class="image__box">
          <img :src="category.src" alt />
          <div class="label">{{ category.text }}</div>
        </div>
      </li>
    </ul>
  <div class="content__header">{{ categoryText }}</div>
    <ul class="content__navigation">
      <li
        v-for="brand in brands"
        :key="brand.id"
        v-on:click="selectBrand($event, brand.id)"
      >
        <a>{{ brand.text }}</a>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: "product-navbar",
  props: {
    categories: {
      type: Array,
    },
    brands: {
      type: Array,
    },
  },
  methods: {
    selectCategory: function(event, id) {
     
      this.$store.commit("setCategory", id);
      this.$store.commit("setBrand", 0);

    },
    selectBrand: function(event, id) {
      
      this.$store.commit("setBrand", id);
    }
  },
  computed:{
    categoryText: function() {
      
      return this.$store.state.categoryText;
    }
  }
};
</script>

<style scoped>


.nav__wrapper  {
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffff00;
}

.nli {
  display: inline-block;
  
  margin-right: 5px;
  
  border: 1px solid #000;
  
  padding: 3px;
  flex-basis: 20%;
  height: 248px;
  width: max-content;
  align-content: center;
}

.image__box {
  background-color: #444;
  color: #fff;
  display: contents;
  height: 248px;
  align-items: center;
}

.label {
  margin-top: -30px;
  text-align: center;
  color: blue;
}

.image__box img {
  width: 200px;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
  
.content__navigation {
  grid-area: navigation;
  list-style-type: none;
  background: rgb(24, 230, 202);
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  justify-content: center;
  list-style: none;
  padding: 0;
  top: 80px;
  display: flex;
  position: sticky;
}

.content__navigation li {
  top: 0;
  position: sticky;
  display: inline-block;
}

.content__navigation li a {
  display: inline-block;
  background: rgb(24, 230, 202);
  padding: 10px 0px;
  width: 150px;
  text-decoration: none;
  color: rgb(7, 39, 146);
  outline: none;
  transition: 0.5s linear;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: none;
  font-variant: small-caps;
  font-weight: normal;
  font-size: 18px;
  line-height: 3;
}

.content__navigation li a:hover {
  color: #fff;
  background-color: #17629e;
  text-decoration: none;
}

.content__navigation li a:focus {
  color: #fff;
  background-color: #17629e;
}

.content__navigation li:hover .submenu {
  display: block;
}

.content__header {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  font-variant: small-caps;
  font-weight: none;
  font-size: 30px;
  line-height: normal;
  background-color: #a52a2a;
  justify-content: space-evenly;
  align-items: center;
  grid-area: header;
}
</style>
