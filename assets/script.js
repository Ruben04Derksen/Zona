var url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbf8c25035msh1581a5baf939adap1808b3jsnde0cea465c6b',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	var response = fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
	
} catch (error) {
	console.error(error);
}


