const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");
const loadMoreBtn = document.getElementById("load-more-btn");
const loader = document.getElementById("gallery-loader");
const gallery = document.getElementById("gallery");
let page = 1;
const imagesPerPage = 6;

// Array de imágenes adicionales
let newImages = [
  "/images/gallery/surf school 14.jpeg",
  "/images/gallery/surf school 15.jpeg",
  "/images/gallery/surf school 16.jpeg",
  "/images/gallery/surf school 17.jpeg",
  "/images/gallery/surf school 18.jpeg",
  "/images/gallery/surf school 19.jpeg",
  "/images/gallery/surf school 20.jpeg",
  "/images/gallery/surf school 21.jpeg",
  "/images/gallery/surf school 22.jpeg",
  "/images/gallery/surf school 23.jpeg",
  "/images/gallery/surf school 24.jpeg",
  "/images/gallery/surf school 26.jpeg",
  "/images/gallery/surf school 27.jpeg",
];

// Función para habilitar el modal
function enableModal(img) {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
  });
}

// Cerrar modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Cuando el contenido está cargado, habilitar modal para las imágenes iniciales
document.addEventListener("DOMContentLoaded", function() {
  const initialGalleryItems = document.querySelectorAll(".gallery-item");
  initialGalleryItems.forEach(item => {
    enableModal(item);
  });
});

// Cargar más imágenes
loadMoreBtn.addEventListener("click", function () {
    loader.style.display = "block";  // Mostrar el loader
  
    setTimeout(() => {
      const start = (page - 1) * imagesPerPage;
      const end = page * imagesPerPage;
      const imagesToLoad = newImages.slice(start, end);
  
      if (imagesToLoad.length > 0) {
        imagesToLoad.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.classList.add("gallery-item");
          img.alt = `Image ${src}`;
          img.loading = "lazy";
          gallery.appendChild(img);
          enableModal(img); // Habilitar modal para las nuevas imágenes
        });
  
        page++;
        loader.style.display = "none"; // Ocultar el loader cuando se cargan las imágenes
  
        if (end >= newImages.length) {
          loadMoreBtn.style.display = "none"; // Ocultar el botón cuando no hay más imágenes
        }
      }
    }, 1000); // Simula la carga
  });
  
