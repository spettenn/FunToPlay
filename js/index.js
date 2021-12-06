import {
	getGoals,
	goalRender,
	getGoalPackage,
	goalPackageRender,
	getStoredFavorites,
} from './components/fetch.js';

const favorites = getStoredFavorites();

console.log('these are the stored localStorage ', favorites);
