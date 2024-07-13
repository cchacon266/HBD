let currentImageIndex = 1;
const totalImages = 7;
const imageElement = document.querySelector('.carousel-image');

function showNextImage() {
    currentImageIndex = currentImageIndex % totalImages + 1;
    imageElement.src = `imagen/imagen${currentImageIndex}.jpeg`;
}

setInterval(showNextImage, 3000);

function showModal(message, showImage) {
    document.getElementById('modalText').innerHTML = message;
    const modalContent = document.querySelector('.modal-content');
    const sorryImage = document.getElementById('sorryImage');
    if (showImage) {
        sorryImage.style.display = "block";
    } else {
        sorryImage.style.display = "none";
    }
    modalContent.classList.add('large'); // Agregar la clase 'large' al modal
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('large'); // Remover la clase 'large' al cerrar el modal
    document.getElementById('myModal').style.display = "none";
}


function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
