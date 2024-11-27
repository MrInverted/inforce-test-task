import { createAsyncThunk } from "@reduxjs/toolkit";
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
  async (id: string, api) => {
    try {
      const { data } = await axiosInstance.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
);

interface IUpdate {
  id: string;
  inc: any;
}

const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, inc }: IUpdate, api) => {
    try {
      const { data } = await axiosInstance.put(`/products/${id}`, inc);
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
)

export { fetchProducts, createProduct, deleteProduct, updateProduct }