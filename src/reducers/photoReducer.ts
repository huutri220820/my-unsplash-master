import photoState from "states/photoState";
import photos from "data/PhotoStore.json";
import PhotoModel from "models/PhotoModel";
import {getStorage} from "services/localStore";

//* initial state
const photoInStorage: PhotoModel[] = JSON.parse(getStorage("photos") ?? JSON.stringify(photos));

const initialState: photoState = {
	list: photoInStorage,
};

const photoReducer = (state: photoState = initialState, action: any) => {
	switch (action.type) {
		case "ADD_PHOTO": {
			const newList = [...state.list];
			newList.push(action.payload);

			return {
				...state,
				list: newList,
			};
		}

		case "REMOVE_PHOTO": {
			const newList = state.list;
			const index = newList.findIndex((listItem) => listItem.id === action.payload.id);

			if (newList[index].password === action.payload.password) {
				newList.splice(index, 1);
				return {
					...state,
					list: newList,
				};
			} else return state;
		}

		default:
			return state;
	}
};

export default photoReducer;
