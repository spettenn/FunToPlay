import {
	testLengthofTextBoxValue,
	testEmailAddress,
} from '../components/validator.js';

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

/*form.onsubmit = async function (event) {
	event.preventDefault();

	if (
		testLengthofTextBoxValue(password.value, 1) &&
		testEmailAddress(email.value)
	) {
		try {
			const response = await axios.post(
				`https://funtoplay.herokuapp.com/auth/local`,
				{
					identifier: email.value,
					password: password.value,
				}
			);

			localStorage.setItem('jwt', response.data.jwt);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			window.location.href = './admin.html';
		} catch (error) {
			alert('alert-danger', error);
		}
	} else {
		alert('alert-danger', 'Please enter proper values for the inputs');
	}
};*/

//const form = document.getElementById(".form")
//const loggedInContent = document.querySelector("#logged-in-content")

form.onsubmit = async (event) => {
	event.preventDefault();

	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	const body = {
		identifier: email,
		password,
	};

	const headers = {
		'Content-Type': 'application/json',
	};

	const response = await fetch('https://funtoplay.herokuapp.com/auth/local', {
		method: 'POST',
		body: JSON.stringify(body),
		headers,
	});

	if (!response.ok) {
		// handle error
	}

	const { jwt } = await response.json();
	localStorage.setItem('strapi-access-token', jwt);

	window.location.assign('/admin.html');
};
