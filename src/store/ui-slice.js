import { createSlice } from '@reduxjs/toolkit';
import { fetchCartData, sendCartData } from './cart-actions';
 
const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },   
  extraReducers: {
    [fetchCartData.rejected]: (state, action) => {
      state.notification = {
        status: 'error', 
        title: 'Error!', 
        message: action.error.message || 'Fetch failed'
      };
    },
    [sendCartData.pending]: (state) => {
      state.notification = {
        status: '', 
        title: 'Pending ...', 
        message: 'Sending Books ...'
      };
    },
    [sendCartData.fulfilled]: (state) => {
      state.notification = {
        status: 'success', 
        title: 'Success!', 
        message: 'Cart data sent successfully!'
      };
    },
    [sendCartData.rejected]: (state, action) => {
      state.notification = {
        status: 'error', 
        title: 'Error!', 
        message: 'Failed to send cart data!'
      };
    }
  }
});
 
export const uiActions = uiSlice.actions;
export default uiSlice;