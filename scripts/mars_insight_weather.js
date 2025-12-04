/*
const API_KEY = "YWVYvAXpKRhQ7eR0ja7XmRsAo44F72OjylBP1HDm";
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;



getMarsWeather();

function getMarsWeather() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("Mars Weather Data:", data);
        })
        
}
*/

const localSimulatedData = '/local_data/mars_simulated_data_2025.json';

getLocalMarsWeather();

function getLocalMarsWeather() {
    fetch(localSimulatedData)
        .then(response => response.json())
        .then(data => {
            console.log("Local Simulated Mars Weather Data:", data);
        })
}