import { goals } from './components/fetch.js';
import { goalPackages } from './components/fetch.js';
import { extras } from './components/fetch.js';

// Fetching single goals
async function fetchGoals() {
	const response = await fetch(goals);
	const data = await response.json();
	console.log('these are single goals', data);
	let allGoals = data;
	allGoals.forEach(function (id, name) {
		console.log('object inside', id);
		document.querySelector('.goals').innerHTML += `
		<div class="cards">
      <h1>${id.name}</h1>
      <h3>${id.description}</h3>
		</div>
    `;
	});
}
fetchGoals();

// Fetching goal packages
async function fetchGoalPackage() {
	const response = await fetch(goalPackages);
	const data = await response.json();
	console.log('these are packagaes', data);
	let allPackages = data;
	allPackages.forEach(function (id, name) {
		document.querySelector(`.goal-packages`).innerHTML += `
		<div class="cards">
		<h1>${id.name}</h1>
      <h3>${id.description}</h3>
	  </div>
		`;
	});
}

fetchGoalPackage();

// Fetching extras
async function fetchExtras() {
	const response = await fetch(extras);
	const data = await response.json();
	console.log('These are extras', data);
	let allExtras = data;
	allExtras.forEach(function (id, name) {
		document.querySelector(`.extras`).innerHTML += `
		<div class="cards">
		<h1>${id.name}</h1>
      <h3>${id.description}</h3>
	  </div>
		`;
	});
}

fetchExtras();
