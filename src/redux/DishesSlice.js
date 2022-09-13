import { createSlice } from '@reduxjs/toolkit';

export const DishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "SEAFOOD"
    },
    reducers: {
      filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
      }
    },
  })
  
export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = DishesSlice.actions;
export default DishesSlice.reducer