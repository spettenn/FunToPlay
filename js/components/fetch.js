const goals_URL = 'http://localhost:1337/goals';
// const goals_URL = 'https://funtoplay.herokuapp.com/goals';
const goalPackages_URL = 'http://localhost:1337/Goal-packages';
// const goalPackages_URL = 'https://funtoplay.herokuapp.com/Goal-packages';
const extras_URL = 'http://localhost:1337/Extras';
// const extras_URL = 'https://funtoplay.herokuapp.com/Extras';

export function getStoredFavorites() {
	let favorites = [];
	const storedFavorites = localStorage.getItem('favorites');

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites);
		favorites = parsed;
	}

	return favorites;
}

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
	const slug = `goals-${goals.slug}`;

	const productCard = document.createElement('div');
	productCard.slug = slug;
	let favorites = getStoredFavorites();
	const isFavorited = favorites.some((item) => item.slug === goals.slug);

	productCard.classList.add('cards');
	productCard.innerHTML = `
	<img class="card__img" src="${goals.images}" />
        <h1 class="card__title">${goals.name}</h1>
        <p class="card__price">${goals.price}</p>
		<a class="mere__info" href="../details/goals.html?id=${goals.id}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="far fa-shopping-cart" data-name="${goals.name}" data-slug="${goals.slug}" data-price="${goals.price}"></i>
		<i class="fas fa-shopping-cart" data-name="${goals.name}" data-slug="${goals.slug}" data-price="${goals.price}"></i
        </button>
    `;

	document.querySelector('.goals').appendChild(productCard);

	const filledHeart = document.querySelector(`#${slug} .far .fa-shopping-cart`);
	const outlinedHeart = document.querySelector(
		`#${slug} .fas .fa-shopping-cart`
	);

	if (isFavorited) {
		filledHeart.style.display = 'inline';
		outlinedHeart.style.display = 'none';
	} else {
		filledHeart.style.display = 'none';
		outlinedHeart.style.display = 'inline';
	}

	const heartButton = document.querySelector(`#${button_id}`);
	heartButton.onclick = () => {
		favorites = getStoredFavorites();
		const existingProduct = favorites.find((item) => item.slug === goals.slug);

		if (existingProduct) {
			const index = favorites.indexOf(existingProduct);
			favorites.splice(index, 1);

			// Issues, removing wrong favorites when clicking likes button
			favorites = favorites;
			filledHeart.style.display = 'none';
			outlinedHeart.style.display = 'inline';
		} else {
			filledHeart.style.display = 'inline';
			outlinedHeart.style.display = 'none';
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
		<img class="card__img" src="${goalPackage.images}" />
        <h1 class="card__title">${goalPackage.name}</h1>
        <p class="card__price">${goalPackage.price}</p>
		<a class="mere__info" href="../details/goal-packages.html?id=${goalPackage.id}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${goalPackage.name}" data-slug="${goalPackage.slug}" data-price="${goalPackage.Price}"></i>
        </button>
    `;

	document.querySelector('.goal-packages').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.find((item) => item.slug === goalPackage.slug);

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
	<img class="card__img" src="${extras.images}" />
        <h1 class="card__title">${extras.name}</h1>
        <p class="card__price">${extras.price}</p>
		<a class="mere__info" href="../details/extras.html?id=${extras.id}">Mere informasjon</a>
        <button class="cart__btn" id="${button_id}">
		<p class="card__text">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${extras.name}" data-slug="${extras.slug}" data-price="${extras.Price}"></i>
        </button>
    `;

	document.querySelector('.extras').appendChild(productCard);

	const cartButton = document.getElementById(button_id);
	cartButton.onclick = () => {
		let favorites = getStoredFavorites();
		const isAdded = favorites.find((item) => item.slug === extras.slug);

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
