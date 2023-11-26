import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../MOCK_DATA";

//Création du context

export const ManagementCartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//Utilisation d'un reducer pour gerer les états

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedShoppingCartItems = [...state.items];

    //vérifier si l'élément est présent dans le panier grace a son Index

    const existingElementIndex = updatedShoppingCartItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );

    const existingElement = updatedShoppingCartItems[existingElementIndex];

    if (existingElement) {
      const updateItemData = {
        ...existingElement,
        quantity: existingElement.quantity + 1,
      };

      updatedShoppingCartItems[existingElementIndex] = updateItemData;

      console.log(updatedShoppingCartItems[existingElementIndex]);
    } else {
      //L'élément n'existe pas encore dans le panier

      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );

      if (product) {
        updatedShoppingCartItems.push({
          id: action.payload,
          name: product.name,
          amount: product.price,
          quantity: 1,
        });
      }
    }
    return {
      items: updatedShoppingCartItems,
    };
  }

  if (action.type === "UPDATE_ITEM_QUANTITY") {
    const updatedShoppingCartItems = [...state.items];
    const updatedElementIndex = updatedShoppingCartItems.findIndex(
      (cartItem) => cartItem.id === action.payload.productId
    );

    const updatedData = {
      ...updatedShoppingCartItems[updatedElementIndex],
    };

    const newQuantity = action.payload.quantity;

    console.log("before", updatedData.quantity);

    updatedData.quantity += newQuantity;

    if (updatedData.quantity <= 0) {
      updatedShoppingCartItems.splice(updatedElementIndex, 1);
    } else {
      updatedShoppingCartItems[updatedElementIndex] = updatedData;
    }

    return {
      items: updatedShoppingCartItems,
    };
  }

  return state;
};

export const ManagementCartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  const handleAddItemToCart = (id) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };
  const handleUpdateItemQuantity = (productId, amount) => {
    cartDispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: {
        productId,
        quantity: amount,
      },
    });
  };

  const initialValue = {
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateItemQuantity,
  };

  return (
    <ManagementCartContext.Provider value={initialValue}>
      {children}
    </ManagementCartContext.Provider>
  );
};
