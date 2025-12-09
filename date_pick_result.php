<?php include __DIR__ . '/includes/header.php'; ?>

<main class="result-main">
    <section class="date-result">

        <div class="result-header">
            <h3>Departure Date</h3>
            <span id="selected-date"></span>
            <h3>Selected Spacecraft</h3>
            <span id="selected-spacecraft"></span>
        </div>

        <div id="sol-data-container"></div>

        <div class="result-conclusion">
            <h3>Bring an extra spacesuit</h3>
            <p>As you can see, the weather here is inhabitable. This is obviously a scam website. You're lucky I didn't charge you for this.</p>
            <p>Take care of your home planet instead.</p>
            <a href="earth_images.php"><h3>Check out some images of Earth!</h3></a>
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