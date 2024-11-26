import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../libs/axios";

const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, api) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
);

const createProduct = createAsyncThunk(
  "products/create",
  async (inc: any, api) => {
    try {
      const { data } = await axiosInstance.post("/products", inc);
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
);

const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: number, api) => {
    try {
      const { data } = await axiosInstance.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
);



const productslice = createSlice({
  name: "products",

  initialState: {
    isLoading: true,
    isError: false,
    products: [] as IProduct[],
    current: {} as IProduct | null
  },

  reducers: {
    setCurrent(state, action) {
      state.current = action.payload
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

export { productslice, fetchProducts, deleteProduct, createProduct };

export const { setCurrent } = productslice.actions;