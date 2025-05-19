import React from "react";
import Css from './ImageGallery.module.css';


const ImageModal = ({ isOpen, closeModal, selectedImage }) => {
    const pressKey = ({ key }) => {
        if (key === 'Escape') {
            closeModal();
        }
    }
    const handleClick = () => {
        closeModal();
    }
    return (
        <div
            className={`${Css.ImageModal_Overlay} ${isOpen ? Css.Open : ''}`}
            onClick={handleClick} onKeyDown={pressKey} role="button" tabIndex={0}>
            {selectedImage ? (
                <div className={Css.ImageModal_Card}>
                    <img src={selectedImage.urls.regular} alt={selectedImage.description} />
                    <div className={Css.ImageModal_Card_Content}>
                        <a href={selectedImage.links.html} target="_blank" rel="noreferrer">
                            <h2>{selectedImage.user.name}</h2>
                        </a>
                    </div>
                </div>
            ) : null}
        </div>
    )
};



export default ImageModal;  