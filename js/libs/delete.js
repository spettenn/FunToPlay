/*let data = [];

async function fetchData() {
	return data;
}

function refresh(data) {
	tBody = document.getElementById('productTable');
	tBody.innerHTML = '';

	for (idx in data) {
		let goal = data[idx];
		template = `
    <tr>
      <th scope="row">${idx + 1}</th>
      <td>
        <button type="button" class="btn btn-danger" onclick="deleteAndRefresh(${
					goal.id
				})"><i class="far fa-trash-alt"></i></button>
      </td>
    </tr>
    `;
	}
}

async function deleteItem(id) {
	return fetch(
		`https://funtoplay.herokuapp.com/goalss/${id}`,
		(method = 'DELETE'),
		(headers = {
			Authorization: `Bearer ${strapiAccessToken}`,
		})
	);	
};

async function deleteAndRefresh(id)*/
async function getApi() {
	const response = await fetch('https://funtoplay.herokuapp.com/goals');
	const data = await response.json();
	console.log(data);
	return data;
}
/*
if (withDeleteButton) {
	const deleteButton = document.querySelector(`#${id} .delete-album`);

	deleteButton.onclick = async () => {
		const confirmed = confirm(
			`Are you sure you want to delete album "${album.AlbumName}"?`
		);

		if (confirmed) {
			const strapiAccessToken = localStorage.getItem('strapi-access-token');

			if (!strapiAccessToken) {
				window.location.replace('/login.html');
			}

			if (!strapiAccessToken.startsWith('ey')) {
				window.location.replace('/login.html');
			}

			const response = await fetch(
				`https://cammiesrecords.herokuapp.com/albums/${album.id}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${strapiAccessToken}`,
					},
				}
			);

			if (!response.ok) {
				// Handle error
				console.error(await response.json());
				alert('Failed to delete album');
			}

			albumCard.remove();
		}
	};
}
*/
