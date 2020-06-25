<template>
  <div class="ranking__wrapper">
      
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
    <ranking-content :calegory="selectedCategory"></ranking-content>
    
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
  
  background-color: aquamarine;
}

.rankingNavbar{
  background: darkorange;
  display: inherit;
  list-style: none;
  justify-content: flex-end;
  margin: 0;
  position: relative;
}

.dropdown {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
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

.rankingNavbar > li:hover > ul,
.dropdown:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

.dropdown li {
  clear: both;
  width: 100%;
}

.dropdown li a {
  text-decoration: none;
  color: #fff;
}
.rankingContent {
  background-color: azure;
}
</style>
