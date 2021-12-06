const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const mainSlug = params.get('slug');
console.log(mainSlug);
async function getGoals() {
	try {
		const responseGoals = await fetch(
			'https://funtoplay.herokuapp.com/Goals' + mainSlug
		);
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
			'https://funtoplay.herokuapp.com/Goal-packages' + mainSlug
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
			'https://funtoplay.herokuapp.com/Extras' + mainSlug
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
