<?php include __DIR__ . '/includes/header.php'; ?>

<main class="result-main">
    <section class="date-result">
            <h1>Departure Date:<span id="selected-date"></span></h1>
            <h1>Selected Spacecraft:<span id="selected-spacecraft"></span></h1>

            <div id="sol-data-container">

            </div>
    </section>


</main>

<script src="/scripts/mars_insight_weather.js"></script>

<script>
    const departureDate = localStorage.getItem('departureDate');
    const spacecraft = localStorage.getItem('spacecraft');

    console.log("Departure Date on Result Page:", departureDate);
    console.log("Selected Spacecraft on Result Page:", spacecraft);

    if (departureDate) {
        document.getElementById('selected-date').textContent = departureDate;

        if (typeof displayWeatherOnDate === "function") {
            displayWeatherOnDate(departureDate);
        } else {
            console.error("displayWeatherOnDate function is not defined.");
        }

    } else {
        console.log("No departure date found in localStorage.");
    }


    if (spacecraft) {
        document.getElementById('selected-spacecraft').textContent = spacecraft;
    }

</script>

<?php include __DIR__ . '/includes/footer.php'; ?>