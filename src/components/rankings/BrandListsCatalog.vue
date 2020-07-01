<template>
  <div class="brandLists_wrapper">
    <h2 class="heading_big">
      <span class="inline-block animated pulse infinite">
        Browse by Brands
        <span class="glyphicon glyphicon-chevron-down" style="font-size: 70%;">
        </span
      ></span>
    </h2>
    <ul>
      <li v-for="brand in brands" :key="brand.id">
        <brand-list :brand="brand" />
      </li>
    </ul>
  </div>
</template>

<script>
import BrandList from "./BrandList";

export default {
  name: "brand-lists-catalog",
  components: { BrandList },
  props: ["brands"],
};
</script>

<style>


.brandLists_wrapper > ul{
	list-style: none;
}
</style>
