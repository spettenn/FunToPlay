import {
	getGoals,
	goalRender,
	getGoalPackage,
	goalPackageRender,
} from './components/fetch.js';
import { getStoredFavorites } from './components/saveLocal.js';
const favorites = getStoredFavorites();

console.log('these are the stored localStorage ', favorites);
