import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productslice } from "./products";
import { modalSlice } from "./modals";

const store = configureStore({
  reducer: {
    products: productslice.reducer,
    modals: modalSlice.reducer,
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export { store }