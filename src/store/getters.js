export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    getProductById: state => id => {
        return state.products.find(p => p.id === id);
  }
,
  getCategoryById: state => id => {
    return state.categories.find(p => p.id === id);
},
getProductsByCategoryId: state => id=> {
  return state.products.filter(p => p.category === id);
},
charactersByCategoryId: state => id =>{
  return state.charachters.filter(p => p.categories.includes(id));
}

}

  