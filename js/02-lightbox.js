import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

const galleryBoxRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    }).join('')
};

galleryBoxRef.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
