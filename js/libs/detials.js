const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
async function getProducts() {
	console.log();

	try {
		const response = await fetch('http://localhost:1337/goals' + id);
		const jsonResults = await response.json();
		const value = jsonResults.goals;
		console.log(response);

		document.title = jsonResults.goals;
		document.querySelector('main').innerHTML += `
<div class="#">
<img class="#" src="#" />
<div class="cardThree">
<h3>${value.name}</h3>
<p>Instructions: ${value.price}</p>
</div>
</div>
`;
	} catch (error) {
	} finally {
	}
}
getProducts(id);
