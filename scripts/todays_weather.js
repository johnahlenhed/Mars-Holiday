function getTodaysWeather() {
    const weatherContainer = document.querySelector('.current-weather');

    fetch(localSimulatedData)
        .then(response => response.json())
        .then(data => {
            const today = new Date();
            const todayString = today.toISOString().split('T')[0];

            const result = getWeeklyData(data, todayString);

            if (result) {
                const { weekData } = result;
                weatherContainer.innerHTML = `
                    <p><strong>Avg Temp (°C):</strong> ${weekData.AT.av}</p>
                    <p><strong>Avg Wind Speed (m/s):</strong> ${weekData.HWS.av}</p>
                    <p><strong>Avg Pressure (Pa):</strong> ${weekData.PRE.av}</p>
                `;
            } else {
                weatherContainer.innerHTML = `<p>No weather data available for today.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching Mars weather data:", error);
            weatherContainer.innerHTML = `<p>Error loading weather data.</p>`;
        });
}
