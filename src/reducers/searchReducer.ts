import searchState from "states/searchState";

const searchReducer = (state: searchState = {str: ""}, action: any) => {
	switch (action.type) {
		case "CHANGE": {
			return {
				...state,
				str: action.payload,
			};
		}
		default:
			return state;
	}
};

export default searchReducer;
