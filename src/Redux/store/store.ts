import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CategoriesReducer from "../Slices/categoriesSlice/categoriesSlice";
import ProductsReducer from "../Slices/productsSlice/productsSlice";
import CartReducer from "../Slices/cartSlice/cartSlice";
import AuthReducer from "../Slices/authSlice/authSlice";
import UserReducer from "../Slices/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer,
    auth: AuthReducer,
    users: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
