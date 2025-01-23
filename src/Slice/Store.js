import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Cart from "./Cart";
const Store = configureStore({
  reducer: {
    auth: Auth,
    cart:Cart
  },
});
export default Store;
