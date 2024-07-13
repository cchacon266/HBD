let currentImageIndex = 1;
const totalImages = 7;
const imageElement = document.querySelector('.carousel-image');

function showNextImage() {
    currentImageIndex = currentImageIndex % totalImages + 1;
    imageElement.src = `imagen/imagen${currentImageIndex}.jpeg`;
}

setInterval(showNextImage, 3000);

function playMusic() {
    document.getElementById('backgroundMusic').play();
}
