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
      const newProduct = action.payload;

      const existingProductItem = state.items.find(
        (item) => item.id === newProduct.id
      );

      if (!existingProductItem) {
        state.items.push({
          id: newProduct.id,
          cover: newProduct.cover,
          title: newProduct.title,
          price: newProduct.price,
          quantity: 1,
        });
      } else {
        existingProductItem.quantity++;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    incrementQuantity(state, action) {
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      state.items[productIndex].quantity++;
    },

    decrementQuantity(state, action) {
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[productIndex].quantity > 1) {
        state.items[productIndex].quantity--;
      } else {
        const confirmDelete = confirm(
          "Vous allez retirer ce produit de votre panier"
        );

        if (confirmDelete) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;

export default shoppingCartSlice;
