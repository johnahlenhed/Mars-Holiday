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
    <link rel="icon" type="image/png" href="/images/mars-icon.png">
    <script src="/scripts/API_KEY.js"></script>
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
            <a href="/earth_images.php"><h3>Earth images</h3></a>

            <div class="current-weather"></div>

            <a href="/index.php" class="mars-weather-logo"><img src="/images/mars_holiday.png" alt="Mars Weather Logo"></a>

            <a href="/image_of_the_day.php" class="nasa-logo"><img src="/images/nasa_logo.png" alt="NASA Logo"></a>

        </nav>
    </header>
    <script src="/scripts/todays_weather.js" defer></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            getTodaysWeather();
        });
    </script>