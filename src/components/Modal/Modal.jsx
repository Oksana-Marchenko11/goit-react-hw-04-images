import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

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
  item: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
