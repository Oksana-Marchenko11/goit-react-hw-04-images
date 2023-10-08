import React, { useState, useEffect } from 'react';
import { UserContext } from '../userContext';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getItems } from 'api/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppDiv } from './App.styled';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmits = searchValue => {
    setSearchName(searchValue);
    setCurrentPage(1);
    setImages([]);
  };
  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };
  useEffect(() => {
    if (searchName !== '') {
      setIsLoading(true);
      getItems(searchName, currentPage).then(
        response =>
          // response => console.log(response.data.hits)
          setImages(prev => [...prev, ...response.data.hits])
        // setTotalPages(Math.ceil(response.data.total / result.config.params.per_page));
      );
      // setImages(...images, ...response.data.hits);
      // setTotalPages(Math.ceil(response.data.total / result.config.params.per_page));
      setIsLoading(false);
    }
  }, [searchName, currentPage]);
  return (
    <UserContext.Provider value={handleSubmits}>
      <AppDiv>
        <Searchbar onSubmit={handleSubmits} />
        {isLoading && <Loader />}
        <ImageGallery data={images} />
        {images.length > 0 && totalPages !== currentPage && (
          <Button loadMore={loadMore} />
        )}
      </AppDiv>
    </UserContext.Provider>
  );
};
