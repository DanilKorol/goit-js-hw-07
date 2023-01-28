import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`
  }).join("");
}

galleryBoxRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryBoxRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  createModal(event.target.dataset.source);
};

function createModal(link) {
  const instance = basicLightbox.create(`
    <img src="${link}" width="800" height="600">`,
    {
    onShow: (instance) => { 
    document.addEventListener('keydown', onModalKeydown);
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', onModalKeydown);
  },
    })
  function onModalKeydown(event) {
  if (event.code === "Escape") {
    instance.close();
  } 
}

instance.show()
};


