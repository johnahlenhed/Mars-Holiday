const SpaceXAPI_URL = 'https://api.spacexdata.com/v5/launches/latest';

getSpaceXData();

function getSpaceXData() {
    fetch(SpaceXAPI_URL)
        .then(response => response.json())
        .then(data => {
            console.log("SpaceX Latest Launch Data:", data);
        })
}