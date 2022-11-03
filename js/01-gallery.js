import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBoxEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}
// console.log(galleryMarkup);

galleryBoxEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryBoxEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  createModal(event.target.dataset.source);
}

let instance;

function createModal(link) {
  instance = basicLightbox.create(`<img src = "${link}">`);

  instance.show();

  document.addEventListener("keydown", onModalClose);
}

function onModalClose(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }

  document.removeEventListener("keydown", onModalClose);
};
