import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = async e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.state.searchValue);
    await this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <SearchbarDiv>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit"></SearchFormBtn>
          <SearchFormInput
            id={111}
            name="111"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarDiv>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
