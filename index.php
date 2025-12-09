<?php include __DIR__ . '/includes/header.php'; ?>

<main class="index-main">
    <section class="date-picker-section">
        <h1>Pick your departure date to Mars</h1>

        <p>Choose your preferred departure date and spacecraft to simulate weather conditions on Mars.</p>

        <h2>Time of departure</h2>

        <input type="date" id="date-picker" />

        <div class="choose-spacecraft-container">
            <h2>Choose your spacecraft</h2>
            <select id="choose-spacecraft">
                <option value="Launch Vehicle Mark-3">Launch Vehicle Mark-3</option>
                <option value="H3">H3</option>
                <option value="Polar Satellite Launch Vehicle">Polar Satellite Launch Vehicle</option>
                <option value="SIMPLEx-4A">SIMPLEx-4A</option>
            </select>
        </div>

        <button id="submit-date">Submit</button>


    </section>
</main>

<script>

    // Save selected data to localStorage and redirect to result page
    const datePicker = document.getElementById('date-picker');
    const submitButton = document.getElementById('submit-date');
    const spacecraftSelect = document.getElementById('choose-spacecraft');


    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const selectedDate = datePicker.value;
        const selectedSpacecraft = spacecraftSelect.value;

        

        localStorage.setItem('departureDate', selectedDate);
        localStorage.setItem('spacecraft', selectedSpacecraft);

        if (selectedDate) {
            window.location.href = 'date_pick_result.php';
            console.log("Saved Departure Date:", selectedDate);
        }

    });
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>