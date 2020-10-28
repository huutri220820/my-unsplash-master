import rootReducer from "reducers";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
// NOTE
/*
 * B1 : tao models cho du doi tuong
 * B2 : tao action va state : action dung de gui dispatch len store, tao tung state va gom lai lam root state (lam khuon dl cua store)
 * B3 : tao reducer : dung de xu ly cac action gui len store --> tao rootReducer tap hop tat ca cac reducer
 * B4 : tao store
 */
