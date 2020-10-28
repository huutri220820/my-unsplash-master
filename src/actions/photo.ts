import Photo from "models/PhotoModel";

export const addPhoto = (photo: Photo) => {
	return {
		type: "ADD_PHOTO",
		payload: photo,
	};
};

export const removePhoto = (idPhoto: number, password: string) => {
	return {
		type: "REMOVE_PHOTO",
		payload: {id: idPhoto, password: password},
	};
};
