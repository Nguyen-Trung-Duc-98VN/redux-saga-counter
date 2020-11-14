import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    number: 0,
  },
  reducers: {
    
  },
});

// export const { HOME_INCREMENT, HOME_DECREMENT, HOME_SETNUMBER, HOME_RESET } = homeSlice.actions;
export default homeSlice.reducer;



    