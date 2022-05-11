import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = ({original, preview, description}) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
};

const galleryMarkup = galleryItems.map(createGalleryMarkup).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


const handleClickImage = (event) => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault();

    const onEscKeyPress = (event) => {
    if (event.code === 'Escape') {
        originImage.close();
        }   
    }

    const originImage = basicLightbox
        .create(`<img src="${event.target.dataset.source}">`,
        {closable: true,
    onShow: (originImage) => {
        window.addEventListener('keydown', onEscKeyPress)
    },
    onClose: (originImage) => {
        window.removeEventListener('keydown', onEscKeyPress)
    },
        });
    
    originImage.show();
}

gallery.addEventListener('click', handleClickImage);
