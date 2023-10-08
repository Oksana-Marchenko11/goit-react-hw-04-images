import PropTypes from 'prop-types';
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClickImg }) => {
  // console.log(image);
  const large = image.largeImageURL;
  const tags = image.tags;
  return (
    <ImageGalleryItems onClick={() => onClickImg({ large, tags })}>
      <ImageGalleryItemImage
        key={image.id}
        src={image.webformatURL}
        alt={image.tags}
      />
    </ImageGalleryItems>
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
