import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./shopping-cart-slice";

const store = configureStore({
  reducer: {
    cartReducer: shoppingCartSlice.reducer,
  },
});

export default store;
