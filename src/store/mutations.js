
export default {
    addProduct (state, product) {
        // mutate state
        state.products.push(product)
      },

    setCategory: (state,newDisplayCategory) => {
    state.displayCategory = newDisplayCategory;
    var targetCategory = state.categories.find((obj) => {
      return obj.id === newDisplayCategory;
    });
    state.categoryText = targetCategory.text;
  },

  setBrand: (state,  newDisplayBrand ) => {
    state.displayBrand = newDisplayBrand;
  },

  SET_PAGINATION: (state, { pageLimit, totalPages, currentPage, startIndex, endIndex  }) => {
    state.pagination= {...state.pagination, pageLimit: pageLimit,
        totalPages: totalPages,
        currentPage: currentPage, 
        startIndex:  startIndex, 
        endIndex: endIndex}
  },

  
}


    