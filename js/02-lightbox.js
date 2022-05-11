import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const createGalleryMarkup = ({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
};

const galleryMarkup = galleryItems.map(createGalleryMarkup).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const handleClickImage = (event) => {
    event.preventDefault();

}

gallery.addEventListener('click', handleClickImage);

