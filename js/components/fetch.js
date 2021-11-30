const goals_URL = 'http://localhost:1337/Goals';
const goalPackages_URL = 'http://localhost:1337/Goal-packages';
const extras_URL = 'http://localhost:1337/Extras';

// Single Goal api fetch with add to local storage
export async function getGoals() {
	const response = await fetch(goals_URL);
	const data = await response.json();
	console.log('Single Goals: ', data);
	return data;
}
// data render "forLoop"
getGoals().then((goals) => goals.forEach(goalRender));

export function goalRender(goals) {
	const button_id = `cart-button-${goals.id}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
        <h1>${goals.name}</h1>
        <p>${goals.price}</p>
        <button id="${button_id}">
        <i class="fas fa-shopping-cart" data-name="${goals.name}" data-price="${goals.Price}"></i>
        </button>
    `;

	document.querySelector('.goals').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.id === goals.id);

		if (isAdded) {
			const index = favorites.indexOf(goals);
			favorites.splice(index, 1);
			favorites = favorites;
		} else {
			favorites.push(goals);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	};
}

// Goal-packages api fetch with add to local storage
export async function getGoalPackage() {
	const response = await fetch(goalPackages_URL);
	const data = await response.json();
	console.log('Goal-Packages: ', data);
	return data;
}

getGoalPackage().then((goalPackage) => goalPackage.forEach(goalPackageRender));

export function goalPackageRender(goalPackage) {
	const button_id = `cart-button-${goalPackage.id}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
        <h1>${goalPackage.name}</h1>
        <p>${goalPackage.price}</p>
        <button id="${button_id}">
        <i class="fas fa-shopping-cart" data-name="${goalPackage.name}" data-price="${goalPackage.Price}"></i>
        </button>
    `;

	document.querySelector('.goal-packages').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.id === goalPackage.id);

		if (isAdded) {
			const index = favorites.indexOf(goalPackage);
			favorites.splice(index, 1);
			favorites = favorites;
		} else {
			favorites.push(goalPackage);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	};
}

// extras api fetch with add to local storage
export async function getExtras() {
	const response = await fetch(extras_URL);
	const data = await response.json();
	console.log('Extras: ', data);
	return data;
}

getExtras().then((extras) => extras.forEach(extrasRender));

export function extrasRender(extras) {
	const button_id = `cart-button-${extras.id}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
        <h1>${extras.name}</h1>
        <p>${extras.price}</p>
        <button id="${button_id}">
        <i class="fas fa-shopping-cart" data-name="${extras.name}" data-price="${extras.Price}"></i>
        </button>
    `;

	document.querySelector('.extras').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.id === extras.id);

		if (isAdded) {
			const index = favorites.indexOf(extras);
			favorites.splice(index, 1);
			favorites = favorites;
		} else {
			favorites.push(extras);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	};
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
