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

function getWeeklyData(data, datestring) {
    const selectedDate = new Date(datestring);

    // Loop all months
    for (const solKey of data.sol_keys) {
        const monthData = data[solKey];

        for (const week of monthData.weekly) {
            const weekStartDate = new Date(week.First_UTC);
            const weekEndDate = new Date(week.Last_UTC);

            if (selectedDate >= weekStartDate && selectedDate <= weekEndDate) {
                return {
                    solKey: solKey,
                    month: monthData.Month,
                    season: monthData.Season,
                    weekData: week
                };
            }
        }
    }

    return null; // No matching week found
}

function displayWeatherOnDate(datestring) {
    fetch(localSimulatedData)
        .then(response => response.json())
        .then(data => {
            const result = getWeeklyData(data, datestring);

            if (result) {
                console.log("Weather data for the week: ", result);
                displayWeekWeather(result);
            } else {
                console.log("No weather data found for the selected date.");
            }
        })
        .catch(error => {
            console.error("Error fetching Mars weather data:", error);
        });
}

function displayWeekWeather(result) {
    const { month, season, weekData, solKey } = result;
    const displayContainer = document.getElementById('sol-data-container');

    console.log("Displaying weather for Sol:", solKey);

    displayContainer.innerHTML = `
        <div class="weather-info">
            <h2>Weather for Sol ${solKey} - ${month} (${season})</h2>
            <p><strong>Week:</strong> ${new Date(weekData.First_UTC).toDateString()} - ${new Date(weekData.Last_UTC).toDateString()}</p>
            
            <div class="weather-stats">
                <h3>Temperature (°C)</h3>
                <p>Average: ${weekData.AT.av}°C</p>
                <p>Max: ${weekData.AT.mx}°C</p>
                <p>Min: ${weekData.AT.mn}°C</p>
                
                <h3>Wind Speed (m/s)</h3>
                <p>Average: ${weekData.HWS.av} m/s</p>
                <p>Max: ${weekData.HWS.mx} m/s</p>
                <p>Min: ${weekData.HWS.mn} m/s</p>
                
                <h3>Atmospheric Pressure (Pa)</h3>
                <p>Average: ${weekData.PRE.av} Pa</p>
                <p>Max: ${weekData.PRE.mx} Pa</p>
                <p>Min: ${weekData.PRE.mn} Pa</p>
                
                <h3>Wind Direction</h3>
                <p>Most Common: ${weekData.WD.most_common}</p>
            </div>
        </div>
    `;
}