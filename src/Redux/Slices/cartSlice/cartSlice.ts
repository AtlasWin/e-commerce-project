import { SingleProduct } from "./../../../types/interfaces";
import { RootState } from "./../../store/store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Initial } from "../../../types/interfaces";

const initialState: Initial = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.cart = [...state.cart, payload];
    },
    removeFromCart(state, { payload }: PayloadAction<SingleProduct>) {
      state.cart = state.cart.filter(
        (item) => item.images[0] !== payload.images[0]
      );
    },
  },
});

export const totalCount = createSelector(
  (state: RootState) => state.cart.cart,
  (cart) => cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
);

export const totalQuantity = createSelector(
  (state: RootState) => state.cart.cart,
  (cart) => cart.reduce((prev, curr) => prev + curr.quantity, 0)
);

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
