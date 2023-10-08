import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { ModalContext } from 'userContext';
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = img => {
  console.log(img);
  const [showModal, setShowModal] = useState(false);
  const clickImg = () => {
    setShowModal(true);
  };
  const closeImg = () => {
    setShowModal(false);
  };
  return (
    <ModalContext.Provider value={closeImg}>
      <ImageGalleryItems>
        <ImageGalleryItemImage
          key={img.image.id}
          src={img.image.webformatURL}
          alt={img.image.tags}
          data-large-img={img.image.largeImageURL}
          onClick={clickImg}
        />
        {showModal && (
          <Modal
            largeImageURL={img.image.largeImageURL}
            tags={img.image.tags}
            key={img.image.id}
            onClose={closeImg}
          />
        )}
      </ImageGalleryItems>
    </ModalContext.Provider>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onItemClick: PropTypes.func,
};
