import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAtCheckout: false,
  isShowCart: false,
  isAtLogin: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    setIsAtCheckout: (state, action) => {
      return (state = { ...state, isAtCheckout: action.payload });
    },
    setIsShowCart: (state, action) => {
      return (state = { ...state, isShowCart: action.payload });
    },
    setIsAtLogin: (state, action) => {
      return (state = { ...state, isAtLogin: action.payload });
    },
  },
});

const { reducer, actions } = headerSlice;
export const { setIsAtCheckout, setIsShowCart, setIsAtLogin } = actions;
export default reducer;
