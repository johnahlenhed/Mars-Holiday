const NASA_EARTH_IMAGES_API_URL = `https://images-api.nasa.gov/search?q=earth&media_type=image`;

getNasaEarthImages();

function getNasaEarthImages() {
    fetch(NASA_EARTH_IMAGES_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("NASA Earth Images Data:", data);
            displayNasaEarthImages(data);
        })
        .catch(error => {
            console.error("Error fetching NASA Earth images:", error);
        });
}

function displayNasaEarthImages(data) {
    const earthImagesSection = document.querySelector('.earth-images');

    data.collection.items.forEach(item => {
        const imageUrl = item.links[0].href;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = item.data[0].title;
        imageElement.classList.add('earth-image');
        earthImagesSection.appendChild(imageElement);
    });
}

