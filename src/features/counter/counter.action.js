import counterActionTypes from './counter.type';

export const increment = () => {
    return {
        type: counterActionTypes.COUNTER_INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: counterActionTypes.COUNTER_DECREMENT,
    }
}

export const incrementAsync = ( value ) => {
    return {
        type: 'COUNTER_INCREMENT_ASYNC',
        payload: { value },
    }
}

export const incrementByAmount = ( value ) => {
    return {
        type: counterActionTypes.COUNTER_INCREMENT_BY_AMOUNT,
        payload: { value },
    }
}
