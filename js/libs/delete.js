

async function deleteAndRefresh(id)
async function getApi() {
	const response = await fetch('https://funtoplay.herokuapp.com/goals');
	const data = await response.json();
	console.log(data);
	return data;
}
