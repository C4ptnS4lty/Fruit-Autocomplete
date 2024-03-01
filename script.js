// Jonathan Lahmann
// 2/29/2024

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerCaseStr = str.toLowerCase();

	fruit.forEach( element => {
		if(element.toLowerCase().includes(lowerCaseStr)) {
			results.push(element);
		}
	})
	
	return results;
}

function searchHandler(e) {
	let inputVal = input.value;
	let results = search(inputVal);

	while(suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);

	if (inputVal.length > 0) {
		showSuggestions(results, inputVal);
	}
}

function showSuggestions(results, inputVal) {

	let suggestionsList = [];
	
	results.forEach(element => {
		let indexOf = element.toLowerCase().indexOf(inputVal.toLowerCase());
		
		let replacement = element.substr(indexOf, inputVal.length);

		suggestionsList.push(element.replace(replacement, replacement.bold()));
	});

	let i = 0; //tracker for classnames to remove later.

	suggestionsList.forEach(element => {
		let addition = document.createElement("li");
		addition.innerHTML = element;
		addition.id = results[i];
		suggestions.appendChild(addition);
		i++;
	})
}

function useSuggestion(e) {
	// TODO
	let chosen = "";

	if (e.target.nodeName == "LI") {
		chosen = e.target;
	} else {
		chosen = e.target.parentNode;
	}
	input.value = chosen.id;

	while(suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);