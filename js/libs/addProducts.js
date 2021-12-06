const goals_URL = 'https://funtoplay.herokuapp.com';
const strapiAccessToken = localStorage.getItem('jwt');
const form = document.querySelector('.form');
// header to prove you are logged in and have the right authentication

//let productForm = document.querySelector('.form');

form.onsubmit = async function (event) {
	const data = new FormData(document.querySelector('.form'));

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
			Name: name,
			Description: description,
			Price: price,
			Image: image,
		}),
	});
	if (!response.ok) {
		// Handle error here
		const errorResponse = await response.json();
		console.error(errorResponse);
		throw new Error('REEEEEEEEEEE');
	}

	console.log(await response.json());
};
