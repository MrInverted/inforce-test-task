import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../libs/axios";

interface IUpdate {
  id: string;
  inc: any;
}

const createComment = createAsyncThunk(
  "comment/create",
  async ({ id, inc }: IUpdate, api) => {
    try {
      const { data } = await axiosInstance.put(`/products/${id}`, inc);
      return data;
    } catch (error) {
      return api.rejectWithValue("ERRRRRRRRRRRRRRROR")
    }
  }
);

const deleteComment = createComment;

export { createComment, deleteComment }