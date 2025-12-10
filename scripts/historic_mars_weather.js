fetch("fetch-weather.php")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const API_URL = "fetch-weather.php";
const historicWeatherElement = document.querySelector('[historic-mars-weather]');


getHistoricData().then(sols => {
    console.log(sols);
    displayHistoricData(sols);
});

function displayHistoricData(sols) {
    // Clear any existing content
    historicWeatherElement.innerHTML = '';
    
    sols.forEach(sol => {
        
        const solCard = document.createElement('div');
        solCard.className = 'sol-card';
        
        solCard.innerHTML = `
            <h3>Sol ${sol.sol}</h3>
            <p class="date">${sol.date}</p>
            <p class="measured-period">${sol.measuredBetween}</p>
            
            <div class="weather-data">
                <div class="temperature-section">
                    <h4>Temperature (°C)</h4>
                    <p>Max: ${sol.maxTemp}°C</p>
                    <p>Min: ${sol.minTemp}°C</p>
                    <p>Average: ${sol.averageTemp}°C</p>
                </div>
                
                <div class="wind-section">
                    <h4>Wind Speed (m/s)</h4>
                    <p>Max: ${sol.maxWindSpeed} m/s</p>
                    <p>Min: ${sol.minWindSpeed} m/s</p>
                    <p>Average: ${sol.averageWindSpeed} m/s</p>
                </div>
            </div>
        `;
        
        historicWeatherElement.appendChild(solCard);
    });
}

function getHistoricData() {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            const {
                sol_keys,
                validity_checks,
                ...solData
            } = data;
            
            return Object.entries(solData).map(([sol, data]) => {
                return {
                    sol: sol,
                    maxTemp: data.AT.mx,
                    minTemp: data.AT.mn,
                    averageTemp: data.AT.av,
                    maxWindSpeed: data.HWS.mx,
                    minWindSpeed: data.HWS.mn,
                    averageWindSpeed: data.HWS.av,
                    measuredBetween: new Date(data.First_UTC).toDateString() + " to " + new Date(data.Last_UTC).toDateString(),
                    date: new Date(data.First_UTC).toDateString()
                }
            });

            
        })
        .catch(error => {
            console.error("Error fetching historic Mars weather data:", error);
        });
}