<?php include __DIR__ . '/includes/header.php'; ?>

<main>
        <div class="background-overlay"></div>
        <section class="earth-images"></section>
</main>

<script>

        document.addEventListener('DOMContentLoaded', () => {
            const earthImagesSection = document.querySelector('.earth-images');

            earthImagesSection.addEventListener('click', (event) => {
                if (event.target.tagName === 'IMG') {
                    event.target.classList.toggle('enlarged');
                    document.querySelector('.background-overlay').classList.toggle('active');
                }

            });
        });

</script>

<?php include __DIR__ . '/includes/footer.php'; ?>

<script src="/scripts/nasa_earth_images.js"></script>