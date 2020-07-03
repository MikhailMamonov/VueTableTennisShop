<template>
   <div class="paginationWrapper">
      <p>
                  {this.state.totalRecords} Страниц | текущая {this.state.currentPage}/{this.state.totalPages}
                </p>
      <ul class="pagination">
        <li>
          <button
            disabled={pager.currentPage == 1 ? true : false}
            onClick={() => this.setPage(1)}
          >
            В начало
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            Назад
          </button>
        </li>
        {pager.pages.map((page, index) => (
          <li key={index}>
            <button
              class={pager.currentPage === page ? "active" : ""}
              onClick={() => this.setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            Вперед
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.totalPages)}
          >
            В конец
          </button>
        </li>
      </ul>
      </div>
</template>

<script>
export default {
name: "product-pagination",
props: {
    totalRecords: {
      type: String,
    },
    pageLimit: {
        type: String
    },
    totalPages: {
        type: String
    },
    pagesToShow: {
        type: String
    },
    currentPage: {
        type: String
    }
  },
  computed: {
      
  },
  methods: {
    selectCategory: function(event, id) {

      this.$store.commit("setCategory", id);
      this.$store.commit("setBrand", 0);

    }
}
}
</script>

<style>
.paginationWrapper {
    display: inline-block;
    padding: 20px;
    font-family: fantasy;
    font-style: normal;
    font-variant: small-caps;
    font-weight: normal;
    font-size: medium;
    line-height: normal;
    margin-left: 30%;
}

.pagination li {
    font-family: fantasy;
    font-style: normal;
    font-variant: small-caps;
    font-weight: normal;
    font-size: medium;
    line-height: normal;
    display: inline;
    color: blue;
}

.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    color: blue;
    text-decoration: none;
    border-radius: 10px;
}

.pagination li a.active {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
}

.pagination li a:hover:not(.active) {
    background-color: #ddd;
}

.pagination li button {
    float: left;
    padding: 8px 16px;
    color: blue;
    text-decoration: none;
    border-radius: 10px;
}
</style>