const queryString = document.location.search;
const params = new URLSearchParams(queryString);
async function getGoals() {
	const id = params.get('id');
	console.log(id);

	try {
		const response = await fetch(
			`https://funtoplay.herokuapp.com/goals?id=${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const jsonResults = await response.json();
		console.log(jsonResults[0]);

		document.querySelector('.details__wrapper').innerHTML += `
<div class="detials__content">
<div class="detials__img__container">
<img src="${jsonResults[0].images}" />
</div>
<div class="detials__info__container">
<div class="detials__card__title">
<h2 class="detials__title__style">${jsonResults[0].name}</h2>
</div>
<p>${jsonResults[0].description}</p>
<p class="detials__price">pris: ${jsonResults[0].price},- kr</p>
</div>
</div>
`;
	} catch (error) {
		console.log({ error });
	} finally {
	}
}
getGoals();
