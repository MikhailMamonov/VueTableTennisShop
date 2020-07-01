<template>
  <div class="ranking__wrapper">
    <div>
    <ul class="rankingNavbar">
        <li>{{selectedCategory.name}}</li>
      <li>
        <a> Select Category</a> <i class="arrow__down"></i>
        <ul class="dropdown" >
          <li v-for="i in categories" :key="i.id" v-on:click="selectedCategory=i">
              <a>{{i.name}}</a>
              </li>
        </ul>
      </li>
    </ul>
    </div>
    <div class="rankingContent">
      <ranking-content :category=selectedCategory />
    </div>
    
  </div>
</template>

<script>

import RankingContent from "./../components/rankings/RankingContent"
export default {
  name: "allRankings",
  components: {RankingContent},
  data: function() {
    return {
      rankings: [
      ],
      categories:[
        { id: 1, name: "blades" },
        { id: 2, name: "pips" },
        { id: 3, name: "rubbers" },
        { id: 4, name: "tables" }
      ],
      selectedCategory: ""

    };
  },
};
</script>

<style>

.ranking__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  background-color: aquamarine;
}

.rankingNavbar{
  background: darkorange;
  list-style: none;
  margin: 0;
}

.rankingContent{
  background: burlywood;
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
}

.dropdown {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

.arrow__down {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.rankingNavbar > li{
  color: #fff;
  background: darkorange;
  padding: 1rem;
  display: inline;
  position: inherit;
  
  margin: 0px;
  text-decoration: none;
  transition-duration: 0.5s;  
}

.dropdown > li {
  color: #fff;
  background: darkorange;
  padding: 1rem;
  display: block;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

.rankingNavbar > li:hover,
.dropdown > li:hover  {
  background: red;
  cursor: pointer;
}

.rankingNavbar > li a {
  text-decoration: none;
  color: #fff;
}

.rankingNavbar > li:hover > ul {
  visibility: visible;
  opacity: 1;
  display: block;
}

.dropdown li {
  clear: both;
}

.dropdown li a {
  text-decoration: none;
  color: #fff;
}

</style>
