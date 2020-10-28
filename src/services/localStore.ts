export const storage = (object: any, key: string) => {
	var data = JSON.stringify(object);
	window.localStorage.setItem(key, data);
};

export const getStorage = (key: string): string | null => {
	var data = window.localStorage.getItem(key);
	return data;
};
