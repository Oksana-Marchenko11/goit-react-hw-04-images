import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getItems } from 'api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppDiv } from './App.styled';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSubmits = searchValue => {
    setSearchName(searchValue);
    setCurrentPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  useEffect(() => {
    if (searchName === '') return;
    setIsLoading(true);

    getItems(searchName, currentPage)
      .then(response => {
        setIsLoading(true);
        setImages(prev => [...prev, ...response.data.hits]);
        setTotalPages(
          Math.ceil(response.data.total / response.config.params.per_page)
        );
      })
      .catch(() => console.log('error'))
      .finally(() => setIsLoading(false));
  }, [searchName, currentPage]);

  const onClickImg = item => {
    setShowModal(item);
  };

  const onCloseImg = () => {
    setShowModal(null);
  };

  return (
    <AppDiv>
      <Searchbar onSubmit={handleSubmits} />
      {isLoading && <Loader />}
      <ImageGallery data={images} onClickImg={onClickImg} />
      {images.length > 0 && totalPages !== currentPage && (
        <Button loadMore={loadMore} />
      )}
      {showModal && <Modal item={showModal} onClose={onCloseImg} />}
    </AppDiv>
  );
};
