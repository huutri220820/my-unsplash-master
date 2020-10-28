export const changeSearch = (str: string) => {
	return {
		type: "CHANGE",
		payload: str,
	};
};
