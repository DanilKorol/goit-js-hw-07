import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryBoxEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
     return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    })
    .join("");
};

galleryBoxEl.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});