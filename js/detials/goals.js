const queryString = document.location.search;
const params = new URLSearchParams(queryString);
async function getGoals() {
	const id = params.get('id');
	console.log({ id });

	try {
		const response = await fetch(`http://localhost:1337/goals/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response);
		const jsonResults = await response.json();
		console.log({ jsonResults });

		document.querySelector('.details__wrapper').innerHTML += `
<div class="detials__content">
<div class="detials__img__container">
<img src="${jsonResults.images}" />
</div>
<div class="detials__card__title">
<div class="detials__info__container">
<h2>${jsonResults.name}</h2>
</div>
<p>${jsonResults.description}</p>
<p>${jsonResults.price}</p>
</div>
</div>
`;
	} catch (error) {
		console.log({ error });
	} finally {
	}
}
getGoals();
