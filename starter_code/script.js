//geting all required elements
const searchContainer = document.querySelector('.search-container');
const inputBox = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//if user press any key and release
function searchHandler(e) {
	const input = e.target.value;
	let results = [];
	if(input){
		results = fruits.filter(fruit => {
			return fruit.toLowerCase().indexOf(input.toLowerCase()) !== -1
		});
		results = results.map(fruit => {
			return fruit = "<li>" + fruit + "</li>";
		});
		searchContainer.classList.add("active");
		showSuggestions(results);
	} else {
		searchContainer.classList.remove("active");
	};
	
};

function showSuggestions(results) {
	let listData;
	if(results){
		listData = results.join('');
	};
	suggestions.innerHTML = listData;
}

function useSuggestion(e) {
	let selectUserData = e.target.textContent;
	inputBox.value = selectUserData;
	searchContainer.classList.remove("active");
}

inputBox.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);