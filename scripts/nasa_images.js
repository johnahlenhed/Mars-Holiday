const API_KEY = "YWVYvAXpKRhQ7eR0ja7XmRsAo44F72OjylBP1HDm";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
const nasaImagesSection = document.querySelector('.nasa_images');

getNasaImages();
getNasaExplanation();

function getNasaExplanation() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const explanationElement = document.querySelector('.explanation');
            explanationElement.textContent = data.explanation;
        })
}

function getNasaImages() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("NASA Images Data:", data);
            displayNasaImage(data);
        })
}

function displayNasaImage(data) {
    const imageElement = document.createElement('img');
    imageElement.src = data.url;
    imageElement.alt = data.title;
    imageElement.style.width = '100%';
    imageElement.style.height = 'auto';
    nasaImagesSection.appendChild(imageElement);
}
