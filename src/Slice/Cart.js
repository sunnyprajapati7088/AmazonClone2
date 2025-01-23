import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "Cart",
  initialState: {
    Cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      const payloadItem = action.payload;
      const item = { ...payloadItem, selected: true, quantity: 1 };
          if (state.Cart.length == 0) {
            state.Cart.push(item);
      }
      else if (
        state.Cart.find((item) => item.id === payloadItem.id) 
          ) {
               state.Cart.find((item) => item.id == payloadItem.id).quantity++;
        
      } else {
        state.Cart.push(item);
      }
    },
    removeItemFromCart: (state, action) => {
      console.log(action.payload);
      state.Cart = state.Cart.filter((item) => item.id != action.payload);
    },
    increaseCartItemQuantity: (state, action) => {
      state.Cart.find((item) => item.id == action.payload).quantity++;
    },
    decreaseCartItemQuantity: (state, action) => {
     if( state.Cart.find((item) => item.id == action.payload).quantity<=0)
     {
            state.Cart = state.Cart.filter((item) => item.id != action.payload);
    }else{
         state.Cart.find((item) => item.id == action.payload).quantity--;
    } 

      },
  },
});
export const {
  addCart,
  increaseCartItemQuantity,
  removeItemFromCart,
  decreaseCartItemQuantity,
} = Cart.actions;
export default Cart.reducer;
