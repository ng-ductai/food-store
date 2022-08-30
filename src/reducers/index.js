import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import shopReducer from "./shopSlice";
import detailReducer from "./detailSlice";

const rootReducer = {
  header: headerReducer,
  shop: shopReducer,
  cart: cartReducer,
  detail: detailReducer,
  wishlist: wishlistReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
