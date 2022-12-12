import { createContext, useReducer } from "react";
import { reducer } from "../reducers/CartReducer";
import { CartObj } from "./CartObj";
const init = CartObj;
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, init);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
