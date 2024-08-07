let currentImageIndex = 1;
const totalImages = 1;
const imageElement = document.querySelector('.carousel-image');

function showNextImage() {
    currentImageIndex = currentImageIndex % totalImages + 1;
    imageElement.src = `imagen/imagen${currentImageIndex}.jpeg`;
}

setInterval(showNextImage, 3000);

function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
}
