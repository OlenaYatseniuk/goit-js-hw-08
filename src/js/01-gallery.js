import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryDiv = document.querySelector('.gallery');
renderGalleryMarkup();

function createGalleryMarkup() {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      (acc += `<div class ="gallery__elem">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
   </div>`),
    ''
  );
}
function renderGalleryMarkup() {
  const markup = createGalleryMarkup();
  galleryDiv.insertAdjacentHTML('beforeend', markup);
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
