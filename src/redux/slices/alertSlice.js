import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAlert: false,
  message: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = true;
      state.message = action.payload;
    },
    hideAlert: (state) => {
      state.showAlert = false;
      state.message = '';
    },
  },
});

export const { setShowAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer; 