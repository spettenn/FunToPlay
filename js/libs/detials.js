const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
async function getGoals() {
	console.log();

	try {
		const responseGoals = await fetch(
			'https://funtoplay.herokuapp.com/Goals' + id
		);
		const jsonResults = await responseGoals.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<img class="#" src="#" />
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
			'https://funtoplay.herokuapp.com/Goal-packages' + id
		);
		const jsonResults = await responseGoalPackages.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<img class="#" src="#" />
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
			'https://funtoplay.herokuapp.com/Extras' + id
		);
		const jsonResults = await responseExtras.json();
		const value = jsonResults;
		console.log(value);
		document.title = jsonResults.name;
		document.querySelector('main').innerHTML += `
<div class="#">
<img class="#" src="#" />
<h3>${value.name}</h3>
<p>price: ${value.price}</p>
</div>
`;
	} catch (error) {
	} finally {
	}
}
responseExtras();
