export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    getProductById: state => id => {
        return state.products.find(p => p.id === id);
  }}

  