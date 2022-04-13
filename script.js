//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	const choice = document.querySelector('input').value;
	console.log(choice);
	const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`;

	fetch(url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			console.log(data);
			document.querySelector('h2').textContent = data.title;
			document.querySelector('img').src = data.hdurl;
			document.querySelector('p').textContent = data.explanation;
		})
		.catch(err => {
			console.log(`error ${err}`);
		});
}
