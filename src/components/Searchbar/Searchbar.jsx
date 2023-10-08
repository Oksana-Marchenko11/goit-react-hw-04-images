import React from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '../../userContext';
import PropTypes from 'prop-types';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [searchValue, setsearchValue] = useState('');

  const onSubmit = useUser();
  const handleChange = async e => {
    setsearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchValue);
    console.log(onSubmit);
    onSubmit(searchValue);
  };
  return (
    <SearchbarDiv>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit"></SearchFormBtn>
        <SearchFormInput
          id={111}
          name="111"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarDiv>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
