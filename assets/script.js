const url = 'https://streaming-availability.p.rapidapi.com/v2/services';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbf8c25035msh1581a5baf939adap1808b3jsnde0cea465c6b',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
	
} catch (error) {
	console.error(error);
}
