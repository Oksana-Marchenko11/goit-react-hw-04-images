import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  clickImg = () => {
    this.setState({ showModal: true });
  };
  closeImg = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { image } = this.props;
    const { showModal } = this.state;
    return (
      <ImageGalleryItems>
        <ImageGalleryItemImage
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          data-large-img={image.largeImageURL}
          onClick={this.clickImg}
        />
        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={this.closeImg}
          />
        )}
      </ImageGalleryItems>
    );
  }
}
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
