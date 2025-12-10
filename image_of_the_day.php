<?php include __DIR__ . '/includes/header.php'; ?>

<main>
    <div class="background-overlay"></div>
    <div class="image-of-the-day-wrapper">
        <h1>NASA Image of the day</h1>
        <section class="nasa_images"></section>
        <p class="explanation"></p>
    </div>
</main>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const nasaImagesSection = document.querySelector('.nasa_images');

        nasaImagesSection.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                event.target.classList.toggle('enlarged');
                document.querySelector('.background-overlay').classList.toggle('active');
            }

        });
    });
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>