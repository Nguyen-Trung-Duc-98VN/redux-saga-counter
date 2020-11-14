import { createSlice, SagaType } from "redux-toolkit-saga";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  caseSagas: {
    increment: state => {
      state.value += 1;
    },
    
    decrement: state => {
      state.value -= 1;
    },

    incrementByAmount: ( state, action ) => {
      state.value += action.payload;
    },

    counter_reset: state => {
        state.value = 0;
    },
  },
  sagaType: SagaType.Watch,
});

// const composeSaga = counterSlice.saga; // call composeSaga in root saga
 
// const { increment } = counterSlice.actions; // action with caseSagas

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
