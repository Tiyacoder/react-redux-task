import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: { list: [] },
  reducers: {
    addCategory: (state, action) => {
      const { category, subcategory } = action.payload;
      const found = state.list.find(c => c.name === category);
      if (found) {
        if (!found.subcategories.includes(subcategory)) {
          found.subcategories.push(subcategory);
        }
      } else {
        state.list.push({ name: category, subcategories: [subcategory] });
      }
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
