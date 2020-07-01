<template>
  <div class="rankingContentWrapper">
    <h1>{{ category.name }} Review</h1>

    <character-name-table></character-name-table>

    <div class="recentlyRelatedGrid">
      <h2>Recently Rated...</h2>
      <ul>
        <li>
          <a>Grass D.TecS </a>
          <div>- rated by lazylegs (5 days ago)</div>
        </li>
        <li>
          <a>Grass D.TecS </a>
          <div>- rated by lazylegs (5 days ago)</div>
        </li>
        <li>
          <a>Grass D.TecS </a>
          <div>- rated by lazylegs (5 days ago)</div>
        </li>
      </ul>
    </div>

    <div class="category-page-buttons">
      <a
        class="btn btn-primary btn-shrink-xxs"
        href="../add-product.php?type=pips"
        ><span class="glyphicon glyphicon-plus"></span> Add Pips</a
      >
      <a class="btn btn-primary btn-shrink-xxs" href="../pips/sale/" title=""
        ><span class="glyphicon glyphicon-tag"></span> View Sale searchItems</a
      >
      <div class="btn-group">
        <a class="btn btn-primary btn-shrink-xxs " href="pips/">All</a>
        <a class="btn btn-primary btn-shrink-xxs active" href="pips/short/"
          >Short</a
        >
        <a class="btn btn-primary btn-shrink-xxs " href="pips/medium/"
          >Medium</a
        >
        <a class="btn btn-primary btn-shrink-xxs " href="pips/long/">Long</a>
      </div>
    </div>
<div>
    <brand-lists-catalog :brands="brands"></brand-lists-catalog>

    <search-bar
      :searchItems="searchItems"
      v-model="searchItem"
      :minLen="0"
      @update-searchItems="update"
      :get-label="getLabel"
      @item-selected="searchItemselected"
      @item-clicked="itemClicked"
      
      :componentItem="tpl"
      :input-attrs="{ name: 'input-test', placeholder:'butterfly feint?',  id: 'v-my-autocomplete' }"
    ></search-bar>
    </div>
  </div>
</template>

<script>

import CharacterNameTable from "./../rankings/CharacterRankTable"
import BrandListsCatalog from "./../rankings/BrandListsCatalog"
import SearchBar from './../rankings/SearchBar'
import tplItem from "./TplSearcItem"

export default {
    name: 'ranking-content',
    data(){
      return {
      brands:[
        { id: 1, name: "(No Brand) " },
        { id: 2, name: "Adidas",   },
        { id: 3, name: "Air ",  },
        { id: 4, name: "Andro", },
        { id: 5, name: "Armstrong" },
        { id: 6, name: "Bomb "},
        { id: 7, name: "dawei 	"  },
        { id: 8, name: "Butterfly "  }
      ],
      searchItems: [],
      tpl: tplItem,
      searchItem: {id:2, category:1,
       brand:2, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg",
        description:"descriptionValue"}
    };
    },
    props: ['category'],
    components:{CharacterNameTable, BrandListsCatalog, SearchBar},
    methods:{
    searchItemselected (item) {
      console.log('Selected item!', item)
    },
    itemClicked (item) {
      console.log('You clicked an item!', item)
    },
    getLabel (item) {
      debugger;
      if (item) {
        return item.label
      }

      return ''
    },
    
    update (text) {
      debugger;
      this.searchItems = this.$store.state.products.filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.label.toLowerCase())
      })
    }}
}
</script>

<style>
.recentlyRelatedGrid {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #ffffff 0%, #d6d6d6 100%);
}

.recentlyRelatedGrid > ul > li > * {
  display: inline-block;
}

.btn-group {
  margin-left: 20px;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div.dbcat {
  cursor: pointer;
  border: 1px solid #a7c5d5;
  border-top: 0;
  border-radius: 4px;
  max-width: 528px;
  background-image: -webkit-linear-gradient(
    #d3e0e7 0%,
    #bfd3de 40%,
    #a4c3d4 41%,
    #c7d9e4 100%
  );
  background-image: linear-gradient(
    #d3e0e7 0%,
    #bfd3de 40%,
    #a4c3d4 41%,
    #c7d9e4 100%
  );
  padding: 5px 10px 3px 13px;
  margin-top: 1px;
  margin-bottom: 0;
  color: #595959;
  font-size: 16px;
  font-weight: bold;
}
</style>
