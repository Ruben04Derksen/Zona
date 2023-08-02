var url = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies';
// var titleMovie = '';

var settings = {
	async: true,
	crossDomain: true,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbf8c25035msh1581a5baf939adap1808b3jsnde0cea465c6b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	response = fetch(url, settings)
    .then(response => response.json())
    .then(data => console.log(data))

} catch (error) {
	console.error(error);
}
const button = document.querySelector('button');
button.addEventListener('click', chooseRandomMovie);

function chooseRandomMovie() {
  var index = Math.floor(Math.random()*9);
    response = fetch(url, settings)
    .then(response => response.json())
    .then((data) => {
		console.log(data.results[index].originalTitleText)
		document.querySelector("#movieTitle").innerHTML = `
		<h2 class='movieTitle'>${data.results[index].originalTitleText.text}</h2>
		<img src='${data.results[index].primaryImage.url}' class='posterSize'></img>
		`
	}
	)	
}

