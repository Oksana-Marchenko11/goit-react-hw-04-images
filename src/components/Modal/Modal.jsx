import { useEffect } from 'react';
import { useModal } from 'userContext';
import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from './Modal.styled';

const Modal = (largeImageURL, tags) => {
  console.log(largeImageURL);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  });

  // useEffect(() => {
  //   window.removeEventListener('keydown', handleKeyDown);
  //   document.body.style.overflow = 'visible';
  // });
  const onClose = useModal();

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
        <img src={largeImageURL.largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
