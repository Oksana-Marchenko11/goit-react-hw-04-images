import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setsearchValue] = useState('');

  // const onSubmit = useUser();
  const handleChange = async e => {
    setsearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(searchValue);
    // console.log(onSubmit);
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
