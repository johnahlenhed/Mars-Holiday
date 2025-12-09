const NASA_EARTH_IMAGES_API_URL = `https://images-api.nasa.gov/search?q=earth&media_type=image`;

//First 10 images of Earth from NASA API

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

    data.collection.items.slice(0, 10).forEach(item => {
        const classNamingIndex = data.collection.items.indexOf(item) + 1;
        const imageUrl = item.links[0].href;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = item.data[0].title;
        imageElement.classList.add('earth-image' + classNamingIndex);
        earthImagesSection.appendChild(imageElement);
    });
}