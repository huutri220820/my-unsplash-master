export const changeMode = (mode: string) => {
	return {
		type: "CHANGE_MODE",
		payload: mode,
	};
};

export const changeTag = (tag: any) => {
	return {
		type: "CHANGE_TAG",
		payload: tag,
	};
};
