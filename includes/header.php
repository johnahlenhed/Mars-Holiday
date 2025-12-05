<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mars Holiday</title>
    <link rel="stylesheet" href="/assets/styles.css">
    <link rel="stylesheet" href="/assets/nasa-images.css">
    <link rel="stylesheet" href="/assets/date-result.css">
    <link rel="stylesheet" href="/assets/earth-images.css">
    <link rel="stylesheet" href="/assets/mars-weather-history.css">
    <link rel="icon" type="image/png" href="/images/mars-icon.png">
    <script src="/scripts/API_KEY.js"></script>
    <script src="/scripts/historic_mars_weather.js"></script>
    <script src="/scripts/mars_insight_weather.js"></script>
    <script>
        const localSimulatedData = '/local_data/mars_simulated_data_2025.json';
    </script>
    <script src="/scripts/nasa_images.js" defer></script>
    <script src="/scripts/spaceX.js" defer></script>

</head>

<body>
    <header>
        <nav>
            <div class="navbar-container">
                <a href="/index.php" class="mars-weather-logo"><img src="/images/mars_holiday.png" alt="Mars Weather Logo"></a>
            </div>
            <section class="nav-link-section">
                <a href="/mars_weather_history.php">Mars weather history</a>
                <a>SpaceX launches</a>
                <a>Plan your Mars holiday</a>
                <a>Book Hotel</a>
            </section>
        </nav>

        <nav class="sub-navbar">
            <h3>Today's Mars Weather</h3>
            <div class="current-weather-wrapper">
                <div class="current-weather"></div>
            </div>
        </nav>
    </header>

    <script src="/scripts/todays_weather.js" defer></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            getTodaysWeather();
        });
    </script>