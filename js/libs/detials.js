const goals_URL = 'http://localhost:1337/goals/';
// const goals_URL = 'https://funtoplay.herokuapp.com/goals';
const goalPackages_URL = 'http://localhost:1337/Goal-packages';
// const goalPackages_URL = 'https://funtoplay.herokuapp.com/Goal-packages';
const extras_URL = 'http://localhost:1337/Extras';
// const extras_URL = 'https://funtoplay.herokuapp.com/Extras';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const slug = params.get('slug');
console.log(slug);
async function getGoals() {
	try {
		const responseGoals = await fetch('http://localhost:1337/goals/' + slug);
		const jsonResults = await responseGoals.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<h3>${value.name}</h3>
<p>price: ${value.price}</p>
</div>
`;
	} catch (error) {
	} finally {
	}
}
getGoals();

async function getGoalPackages() {
	console.log();

	try {
		const responseGoalPackages = await fetch(
			'http://localhost:1337/Goal-packages/' + slug
		);
		const jsonResults = await responseGoalPackages.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<h3>${value.name}</h3>
<p>price: ${value.price}</p>
</div>
`;
	} catch (error) {
	} finally {
	}
}
getGoalPackages();

async function responseExtras() {
	console.log();

	try {
		const responseExtras = await fetch(
			'https://funtoplay.herokuapp.com/Extras/' + slug
		);
		const jsonResults = await responseExtras.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<h3>${value.name}</h3>
<p>price: ${value.price}</p>
</div>
`;
	} catch (error) {
	} finally {
	}
}
responseExtras();
