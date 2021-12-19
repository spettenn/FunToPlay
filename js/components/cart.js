import { getStoredFavorites } from './saveLocal.js';
const favorites = getStoredFavorites();
console.log(favorites);

favorites.forEach((favorites) => renderFav(favorites));

function renderFav(data) {
	const productCard = document.createElement('div');
	productCard.classList.add('cart');
	productCard.innerHTML = `
        <img class="cart__img" src="${data.images}"/>
        <h1 class="fav__title">${data.name}</h1>
        <p class="fav__price">${data.description}</p>
        <p class="fav__price">${data.price}</p>
        <button type="button" class="delete__button" onclick="deleteAndRefresh(${data.slug})"><i class="far fa-trash-alt"></i></button>
      
        
    `;
	document.querySelector('.cart__card').appendChild(productCard);
}
renderFav();

const deleteAndRefresh = localStorage.removeItem('slug');

let numOr0 = (n) => (isNaN(n) ? 0 : n);
let totalPrices = favorites.reduce(
	(totalPrice, currentValue) => (totalPrice += currentValue.Price),
	0
);

console.log(totalPrices);

document.querySelector('.actual_price_container');

const priceContainer = document.querySelector('.actual_price_container');
priceContainer.innerText = 'kr,-' + totalPrices;
