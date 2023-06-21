// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

function makeImgItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
       alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', makeImgItem(galleryItems));

// Ініціалізуємо плагін лайтбокс та додаємо параметри

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
