import {combineReducers} from "redux";
import rootState from "states/rootState";
import {modeReducer} from "./modeReducer";
import photoReducer from "./photoReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers<rootState>({
	photos: photoReducer,
	search: searchReducer,
	modeShow: modeReducer,
});

export default rootReducer;
