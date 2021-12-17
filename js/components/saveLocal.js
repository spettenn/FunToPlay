export function saveToStorage(keyName, object) {
	localStorage.setItem(keyName, JSON.stringify(object));
}

export function getStorageItem(keyName) {
	if (localStorage.getItem(keyName) !== null) {
		return JSON.parse(localStorage.getItem(keyName));
	} else {
		return [];
	}
}
export function getStoredFavorites() {
	let favorites = [];
	const storedFavorites = localStorage.getItem('favorites');

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites);
		favorites = parsed;
	}

	return favorites;
}
