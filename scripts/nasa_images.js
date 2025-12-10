fetch('fetch-nasa-image.php')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

const daily_image_API_URL = 'fetch-nasa-image.php';

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