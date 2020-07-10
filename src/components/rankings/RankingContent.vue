<template >
  <div class="rankingContentWrapper">
    <h1>{{ category.name }} Review</h1>

    <character-rank-table :category="category"></character-rank-table>

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
      <a class="btn btn-primary btn-shrink-xxs" href="../add-product.php?type=pips">
      <span class="glyphicon glyphicon-plus"></span> Add Pips</a>
      <a class="btn btn-primary btn-shrink-xxs" href="../pips/sale/" title="">
      <span class="glyphicon glyphicon-tag"></span> View Sale searchItems</a>
      <div class="btn-group">
        <a class="btn btn-primary btn-shrink-xxs " href="pips/">All</a>
        <a class="btn btn-primary btn-shrink-xxs active" href="pips/short/">Short</a>
        <a class="btn btn-primary btn-shrink-xxs " href="pips/medium/">Medium</a>
        <a class="btn btn-primary btn-shrink-xxs " href="pips/long/">Long</a>
      </div>
    </div>
<div class="searchBlock">
    <brand-lists-catalog :brands="brands"></brand-lists-catalog>
    <search-bar :searchItems="searchItems" v-model="searchItem" :minLen="0" :get-label="getLabel" @update-searchItems="update"  @item-selected="searchItemSelected" @item-clicked="searchItemClicked"    :componentItem="tpl" :input-attrs="{ name: 'input-test', placeholder:'butterfly feint?',  id: 'v-my-autocomplete' }"></search-bar>
    </div>
  </div>
</template>

<script>
import CharacterRankTable from "./../rankings/CharacterRankTable";
import BrandListsCatalog from "./../rankings/BrandListsCatalog";
import SearchBar from "./../rankings/SearchBar";
import tplItem from "./TplSearcItem";

export default {
  name: "ranking-content",
  data() {
    return {
      brands: [
        { id: 1, name: "(No Brand) " },
        { id: 2, name: "Adidas" },
        { id: 3, name: "Air " },
        { id: 4, name: "Andro" },
        { id: 5, name: "Armstrong" },
        { id: 6, name: "Bomb " },
        { id: 7, name: "dawei 	" },
        { id: 8, name: "Butterfly " }
      ],
      searchItems: [],
      tpl: tplItem,
      searchItem: {
        id: 2,
        category: 1,
        brand: 2,
        label: "Timo Boll",
        image:
          "https://www.vistasport.ru/upload/iblock/503/503d1f2951107d75db50d7ef12f47439.jpg",
        description: "descriptionValue"
      }
    };
  },
  props: ["category"],
  components: { CharacterRankTable, BrandListsCatalog, SearchBar },
  methods: {
    searchItemselected(item) {
      console.log("Selected item!", item);
    },
    searchItemClicked(item) {
      console.log("You clicked an item!", item);
    },
    getLabel(item) {
      
      if (item) {
        return item.label;
      }

      return "";
    },

    update(text) {
      
      this.searchItems = this.$store.state.products.filter(item => {
        return item.label.toLowerCase().includes(text.toLowerCase());
      });
      
    }
  }
};
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

.searchBlock{
  background-color: green;
  display: flex;
  justify-content: space-around;
}


</style>

<style lang="stylus">
.v-autocomplete
  .v-autocomplete-input-group
    .v-autocomplete-input
      font-size 1.5em
      padding 10px 15px
      box-shadow none
      border 1px solid #157977
      width calc(100% - 32px)
      outline none
      background-color #eee
    &.v-autocomplete-selected
      .v-autocomplete-input
        color green
        background-color #f2fff2
  .v-autocomplete-list
    width 100%
    text-align left
    border none
    border-top none
    max-height 400px
    overflow-y auto
    border-bottom 1px solid #157977
    .v-autocomplete-list-item
      cursor pointer
      background-color #fff
      padding 10px
      border-bottom 1px solid #157977
      border-left 1px solid #157977
      border-right 1px solid #157977
      &:last-child
        border-bottom none
      &:hover
        background-color #eee
      abbr
        opacity 0.8
        font-size 0.8em
        display block
        font-family sans-serif

pre
  text-align left
  white-space pre-wrap
  background-color #eee
  border 1px solid silver
  padding 20px !important
  border-radius 10px
  font-family monospace !important
.left
  text-align left
.note
  border-left 5px solid #ccc
  padding 10px
</style>