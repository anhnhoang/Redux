import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlide";
import modalReducer from "./features/modal/modelSlide";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
