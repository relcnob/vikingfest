import { createContext, useReducer } from "react";
import { reducer } from "../reducers/CartReducer";
const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
