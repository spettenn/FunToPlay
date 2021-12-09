const goals_URL = 'https://funtoplay.herokuapp.com/Goals';
const goalPackages_URL = 'https://funtoplay.herokuapp.com/Goal-packages';
const extras_URL = 'https://funtoplay.herokuapp.com/Extras';

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
	const button_id = `cart-button-${goals.slug}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
	
	<img src="#"/>
        <h1 class="card__title">${goals.name}</h1>
        <p class="card__price">${goals.price}</p>
		<a class="mere__info" href="productDetails.html?slug=/${goals.slug}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${goals.name}" data-slug="${goals.slug}" data-price="${goals.Price}"></i>
        </button>
    `;

	document.querySelector('.goals').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.slug === goals.slug);

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
	const button_id = `cart-button-${goalPackage.slug}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
        <h1 class="card__title">${goalPackage.name}</h1>
        <p class="card__price">${goalPackage.price}</p>
		<a class="mere__info" href="productDetails.html?slug=/${goalPackage.slug}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${goalPackage.name}" data-slug="${goalPackage.slug}" data-price="${goalPackage.Price}"></i>
        </button>
    `;

	document.querySelector('.goal-packages').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.slug === goalPackage.slug);

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
	const button_id = `cart-button-${extras.slug}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards');
	productCard.innerHTML = `
        <h1 class="card__title">${extras.name}</h1>
        <p class="card__price">${extras.price}</p>
		<a class="mere__info" href="productDetails.html?slug=/${extras.slug}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${extras.name}" data-slug="${extras.slug}" data-price="${extras.Price}"></i>
        </button>
    `;

	document.querySelector('.extras').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.some((item) => item.slug === extras.slug);

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
