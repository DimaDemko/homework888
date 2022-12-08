// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
const galleryDiv = document.querySelector('.gallery');
const galleryHtml = addGalleryItemsHtml(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', galleryHtml);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
  /* options */
});
// galleryDiv.addEventListener('click', clickOnimageLink);

// function clickOnimageLink(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   basicLightbox
//     .create(
//       `
//     <img src=${event.target.dataset.source} width="800" height="600">
// `
//     )
//     .show();
// }

function addGalleryItemsHtml(input) {
  return input
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join('');
}

console.log(galleryItems);
