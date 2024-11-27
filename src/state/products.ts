import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts } from "./products-async";


const productslice = createSlice({
  name: "products",

  initialState: {
    isLoading: true,
    isError: false,
    products: [] as IProduct[],
    current: {} as IProduct | null,
    sortBy: '' as 'A-Z' | '0-1',
  },

  reducers: {
    setCurrent(state, action) {
      state.current = action.payload
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
    })


    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.current = null;
    })
  }
});

export { productslice }

export const { setCurrent, setSortBy } = productslice.actions