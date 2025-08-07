import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url="http://localhost:4000";

  // Add to cart logic
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove from cart logic
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedCart = { ...prev };
      updatedCart[itemId] -= 1;

      if (updatedCart[itemId] <= 0) {
        delete updatedCart[itemId]; // optional cleanup
      }

      return updatedCart;
    });
  };

  // Debug: Log cart updates
  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
