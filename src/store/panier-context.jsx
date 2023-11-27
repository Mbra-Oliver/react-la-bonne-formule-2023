import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../MOCK_DATA";

//Items: represente les éléments présents dans le panier

export const PanierContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "AJOUTER_DANS_PANIER") {
    const updateShoppingCartItems = [...state.items];

    //Vérifier si l'élément en question existe

    const existingElementIndex = updateShoppingCartItems.findIndex(
      (cartItem) => cartItem.id === action.payload.productId
    );

    const existingElement = updateShoppingCartItems[existingElementIndex];

    if (existingElement) {
      //Au cas ou l'élément est déja présent dans le panier

      const updatedProductData = {
        ...existingElement,
        quantity: existingElement.quantity + 1,
      };

      updateShoppingCartItems[existingElementIndex] = updatedProductData;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload.productId
      );

      if (product) {
        updateShoppingCartItems.push({
          id: product.id,
          name: product.name,
          amount: product.price,
          quantity: 1,
        });
      }
    }

    return {
      items: updateShoppingCartItems,
    };
  }

  if (action.type === "ACTUALISER_QUANTITE_PRODUIT") {
    const updateShoppingCartItems = [...state.items];

    //Vérifier si l'élément en question existe

    const existingElementIndex = updateShoppingCartItems.findIndex(
      (cartItem) => cartItem.id === action.payload.productId
    );

    const updatedData = {
      ...updateShoppingCartItems[existingElementIndex],
    };

    const newQuantity = action.payload.quantity;
    updatedData.quantity += newQuantity;

    if (updatedData.quantity <= 0) {
      //Retirer l'élément du panier

      updateShoppingCartItems.splice(existingElementIndex, 1);
    } else {
      updateShoppingCartItems[existingElementIndex] = updatedData;
    }

    return {
      items: updateShoppingCartItems,
    };
  }

  return state;
};

export const PanierContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  //Fonction d'ajout dans le panier

  const handleAddProductToCart = (productId) => {
    cartDispatch({
      type: "AJOUTER_DANS_PANIER",
      payload: { productId: productId },
    });
  };

  const handleUpdateProductQuantity = (productId, quantity) => {
    cartDispatch({
      type: "ACTUALISER_QUANTITE_PRODUIT",
      payload: {
        productId,
        quantity,
      },
    });
  };

  const initialValue = {
    items: cartState.items,
    addItemToCart: handleAddProductToCart,
    updateItemQuantity: handleUpdateProductQuantity,
  };
  return (
    <PanierContext.Provider value={initialValue}>
      {children}
    </PanierContext.Provider>
  );
};
