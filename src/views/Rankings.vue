<template>
  <div class="ranking__wrapper">

    <div class="rankingContent">
      <ranking-content />
    </div>
    
  </div>
</template>

<script>

import RankingContent from "./../components/rankings/RankingContent"
export default {
  name: "allRankings",
  components: {RankingContent},

};
</script>

<style lang ="scss">

.ranking__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  background-color: aquamarine;

  .rankingContent{
  background: burlywood;
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
  }
}


</style>
