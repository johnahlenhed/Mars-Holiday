const daily_image_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
const nasaImagesSection = document.querySelector('.nasa_images');

getNasaImages();
getNasaExplanation();

function getNasaExplanation() {
    fetch(daily_image_API_URL)
        .then(response => response.json())
        .then(data => {
            const explanationElement = document.querySelector('.explanation');
            explanationElement.textContent = data.explanation;
        })
}

function getNasaImages() {
    fetch(daily_image_API_URL)
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
    nasaImagesSection.appendChild(imageElement);
}