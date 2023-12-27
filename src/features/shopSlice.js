import { createSlice } from "@reduxjs/toolkit";

import categories_data from '../data/categories-data.json';
import products_data from '../data/products-data.json';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    categorySelected: '',
    productIdSelected: 0,
    categories: categories_data,
    products: products_data,
    productsFilteredByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
      state.productsFilteredByCategory = state.products.filter(product => product.category == state.categorySelected)
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
      state.productSelected = state.products.find(product => product.id == state.productIdSelected)
    } 
  }
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;