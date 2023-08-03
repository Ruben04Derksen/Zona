var url1 = 'https://the-cocktail-db3.p.rapidapi.com/';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbf8c25035msh1581a5baf939adap1808b3jsnde0cea465c6b',
		'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
	}
};

try {
	response = fetch(url1, options)
    .then(response => response.json())
    .then(data => console.log(data))

} catch (error) {
	console.error(error);
}
const button1 = document.querySelector('button');
button1.addEventListener('click', chooseRandomCocktail);

function chooseRandomCocktail() {
  var index = Math.floor(Math.random()*99);
    response = fetch(url1, options)
    .then(response => response.json())
	// Added Image to be viewed in HTML
	.then((data) => {
		console.log(data[index].title)
		var appStorageDrink = data[index].title
		document.querySelector('#drinkName').innerHTML = `
		<h2 class='movieTitle'>${data[index].title}</h2>
		<img src='${data[index].image}' class='posterSize'></img>
		`
		localStorage.setItem('Cocktail Name', appStorageDrink);
	}
	)
}

// console.log(chooseRandomCocktail);
// localStorage.setItem('Cocktail Name', chooseRandomCocktail);















// TRIAL AND ERROR APIS
// var newUrl = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title='+ titleMovie +'&country=us&show_type=movie&output_language=en';
// var options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bbf8c25035msh1581a5baf939adap1808b3jsnde0cea465c6b',
// 		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
// 	}
// };

// try {
// 	var response = fetch(newUrl, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
	
// } catch (error) {
// 	console.error(error);
// }


