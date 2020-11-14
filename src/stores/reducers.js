import {combineReducers} from 'redux';
// import homeSlice from '../../pages/home/home.slice';
import counterSlice from '../features/counter/counter.reducer';

const rootReducers = combineReducers({
    // home: homeSlice,
    counter: counterSlice,
})
export default rootReducers;