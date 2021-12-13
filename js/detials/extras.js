const extras_URL = 'http://localhost:1337/Extras';
// const extras_URL = 'https://funtoplay.herokuapp.com/Extras';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);
async function responseExtras() {
	try {
		const responseGoals = await fetch('http://localhost:1337/Extras/' + id);
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
responseExtras();
