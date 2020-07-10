<template>
<div class = "sortStatsWrapper">
    <h1>Sort by stats {{category}}</h1>
</div>

</template>

<script>
export default {
    name: "sort-by-stats",
    computed: {
      categoryId () {
                    return +this.$route.params.categoryId;
                },
                category () {
                  return this.$store.getters.getCategoryById(this.categoryId);
                    
                }
            }
}
</script>

<style>
.sortStatsWrapper{
    background-color: chartreuse;
}
</style>