import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import JobReducer from './reducers/JobReducer';


const store = createStore(combineReducers({
    job: JobReducer
}), applyMiddleware(thunk));


export default store