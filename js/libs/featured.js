//const goalPackages_URL = 'http://localhost:1337/Goal-packages';
const goalPackages_URL = 'https://funtoplay.herokuapp.com/Goal-packages';

async function getGoalPackage() {
	const response = await fetch(goalPackages_URL);
	const data = await response.json();
	console.log('Goal-Packages: ', data);
	return data;
}

getGoalPackage().then((goalPackage) =>
	goalPackage
		.filter((goalPackage) => goalPackage.featured === true)
		.forEach(goalPackageRender)
);

function goalPackageRender(goalPackage) {
	const button_id = `cart-button-${goalPackage.slug}`;

	const productCard = document.createElement('div');

	productCard.classList.add('cards__featured');
	productCard.innerHTML = `
		<img class="card__img__featured" src="${goalPackage.images}" />
        <h2 class="card__title__featured">${goalPackage.name}</h1>
		<p class="card__desc__price">${goalPackage.price}</p>
        <p class="card__desc__featured">${goalPackage.description}</p>
		<a class="mere__info__featured" href="../details/goal-packages.html?id=${goalPackage.id}">Mere informasjon</a>
        <button class="cart__btn__featured" id="${button_id}">
		<p class="card__text__featured">Legg til i kurven</P>
        <i class="fas fa-shopping-cart" data-name="${goalPackage.name}" data-slug="${goalPackage.slug}" data-price="${goalPackage.Price}"></i>
        </button>
    `;

	document.querySelector('.goal-packages-featured').appendChild(productCard);

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

getGoalPackage().then((productCard) => {
	productCard.forEach((goalPackage) => {
		if (goalPackage.Featured === true) goalPackageRender(goalPackage);
	});
});
