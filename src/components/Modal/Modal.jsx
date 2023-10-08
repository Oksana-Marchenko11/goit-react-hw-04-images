import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({ item, onClose }) => {
  // console.log(item);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  });

  // useEffect(() => {
  //   window.removeEventListener('keydown', handleKeyDown);
  //   document.body.style.overflow = 'visible';
  // });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdrop}>
      <ModalDiv>
        <img src={item.large} alt={item.tags} />
      </ModalDiv>
    </Overlay>
  );
};

Modal.propTypes = {
  item: PropTypes.objectOf({
    large: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
