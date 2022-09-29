import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import isLoadingReducer from './isLoadingReducer';
import noticeReducter from './noticeReducer';

const rootReducer = combineReducers({
    isLoading:isLoadingReducer,
    notice:noticeReducter
});

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
);