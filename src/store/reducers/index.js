// third-party
//import { combineReducers } from 'redux';
import pageReducer from './actions/pageSlice';

const reducer = {
    page: pageReducer
};

export default reducer;