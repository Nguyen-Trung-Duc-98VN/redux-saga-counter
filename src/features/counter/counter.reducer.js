import counterActionTypes from './counter.type';

const initState = {
  value: 0,
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterActionTypes.COUNTER_INCREMENT: {
      state.value += 1;
      return state;
    }

    case counterActionTypes.COUNTER_DECREMENT: {
      state.value -= 1;
      return state;
    }

    case counterActionTypes.COUNTER_INCREMENT_BY_AMOUNT: {
      state.value += action.payload.value;
      return state;
    }

    default: {
      return state;
    }
  }
}


export default counterReducer;