import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    editProduct: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
      state.editProduct = null;
    },
    updateProduct: (state, action) => {
      const idx = state.list.findIndex(p => p.id === action.payload.id);
      if (idx > -1) state.list[idx] = action.payload;
      state.editProduct = null;
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setEditProduct } = productSlice.actions;
export default productSlice.reducer;
