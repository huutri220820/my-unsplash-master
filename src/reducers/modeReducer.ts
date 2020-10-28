import modeState from "states/modeState";

export const modeReducer = (state: modeState = {mode: "MAIN", tag: null}, action: any) => {
	switch (action.type) {
		case "CHANGE_MODE":
			return {
				...state,
				mode: action.payload,
			};

		case "CHANGE_TAG":
			return {
				...state,
				tag: action.payload,
			};
		default:
			return state;
	}
};
