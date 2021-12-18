const queryString = document.location.search;
const params = new URLSearchParams(queryString);
async function getGoals() {
	const id = params.get('id');
	console.log({ id });

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
		console.log(response);
		const jsonResults = await response.json();
		console.log({ jsonResults });
		const info = jsonResults;
		console.log(info);
		document.querySelector('.details__wrapper').innerHTML += `
<div class="detials__content">
<div class="detials__img__container">
<img src="${info.images}" />
</div>
<div class="detials__card__title">
<div class="detials__info__container">
<h2>${info.name}</h2>
<p>${info.description}</p>
<p>${info.price}</p>
</div>
</div>
</div>
`;
	} catch (error) {
		console.log({ error });
	} finally {
	}
}
getGoals();
