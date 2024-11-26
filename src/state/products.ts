import { createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [
  {
    id: 1,
    imageUrl: "imageUrl",
    name: "Test",
    count: 5,
    size: {
      width: 200,
      height: 200,
    },
    weight: 200,
    comments: [
      {
        id: 3,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
    ],
  }
]

const productslice = createSlice({
  name: "products",

  initialState,

  reducers: {

  },

  extraReducers: builder => {

  }
})

export { productslice }