import modeState from "./modeState";
import photoState from "./photoState";
import searchState from "./searchState";

export default interface rootState {
	photos: photoState;
	search: searchState;
	modeShow: modeState;
}
