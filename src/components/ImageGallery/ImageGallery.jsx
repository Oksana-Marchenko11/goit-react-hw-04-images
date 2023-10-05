import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './imageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <ImageGalleryList>
      {data.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onItemClick: PropTypes.func,
};
