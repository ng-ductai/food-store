import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/headerSlice";
import cartReducer from "./reducers/cartSlice";
import wishlistReducer from "./reducers/wishlistSlice";
import shopReducer from "./reducers/shopSlice";
import detailReducer from "./reducers/detailSlice";

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
