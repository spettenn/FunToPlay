const goals_URL = 'https://funtoplay.herokuapp.com';
const strapiAccessToken = localStorage.getItem('strapi-access-token');
console.log('This is user key: ' + strapiAccessToken);
const form = document.querySelector('#form');

if (!strapiAccessToken) {
	console.log('There is no JWT token');
	window.location.replace('../home.html');
}

alert('Hello, you are sadly not an administrator on this page :(');

form.onsubmit = async function (event) {
	const data = new FormData(document.querySelector('#form'));

	event.preventDefault();
	const name = data.get('name');
	const description = data.get('description');
	const price = data.get('price');
	const image = data.get('image');

	const response = await fetch(`https://funtoplay.herokuapp.com/Goals`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${strapiAccessToken}`,
		},
		body: JSON.stringify({
			name: name,
			description: description,
			price: price,
			image: image,
		}),
	});
	if (!response.ok) {
		const errorResponse = await response.json();
		console.error(errorResponse);
		throw new Error('REEEEEEEEEEE');
	}

	console.log(await response.json());
};
