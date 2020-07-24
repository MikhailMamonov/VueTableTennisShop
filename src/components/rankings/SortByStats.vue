<template>
<div class = "sortStatsWrapper">
    <h1>Sort by stats {{category.id}}</h1>
    
        <ul>
            <li v-for="i in charactersByCategory" :key="i.id">
                {{i.name}}
            </li>
        </ul>
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
                    
                },
                charactersByCategory(){
                    return this.$store.getters.charactersByCategoryId(this.categoryId);
                }

            }
}
</script>

<style lang = "scss">
.sortStatsWrapper{
    background-color: chartreuse;
    ul {
        display: flex;  /* aligns all child elements (flex items) in a row */
        list-style: none;
        li{
            flex: 1;        /* distributes space on the line equally among items */
        }
    }
}


</style>