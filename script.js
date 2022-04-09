const url = 'https://api.nasa.gov/planetary/apod?api_key=O6RwMW8y9i4WYbNcoYSy8iZL2PFQuUcA0aHhspmo';
const image = document.querySelector('img');
const title = document.querySelector('h2');
const explanation = document.querySelector('p');
const copyright = document.querySelector('h4');

fetch(url)
	.then(res => res.json()) // parse response as JSON
	.then(data => {
		image.src = data.hdurl;
		title.textContent = data.title;
		explanation.textContent = data.explanation;
		copyright.textContent = `Image Credit: ${data.copyright}`;
	})
	.catch(err => {
		console.log(`error ${err}`);
	});
