import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shopping_cart",
  initialState: {
    items: [],
    viewCart: false,
  },

  reducers: {
    toggleCartView(state) {
      state.viewCart = !state.viewCart;
    },

    addItemToCart(state, action) {
      console.log(action);
    },
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice;
