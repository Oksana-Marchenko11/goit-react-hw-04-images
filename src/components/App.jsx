import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getItems } from 'api/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppDiv } from './App.styled';

export class App extends Component {
  state = {
    isLoading: false,
    searchName: '',
    images: [],
    error: null,
    currentPage: 1,
    totalPages: 0,
  };
  handleSubmit = searchValue => {
    this.setState({ searchName: searchValue });
    this.setState({ currentPage: 1, images: [] });
  };
  loadMore = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchName, currentPage } = this.state;
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        this.setState({ isLoading: true });
        const result = await getItems({ searchName, currentPage });
        this.setState({ images: [...this.state.images, ...result.data.hits] });
        this.setState({
          totalPages: Math.ceil(
            result.data.total / result.config.params.per_page
          ),
        });
        console.log(this.state);
      } catch (e) {
        console.log('error');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    const { images, currentPage, totalPages, isLoading } = this.state;
    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery data={this.state.images} />
        {images.length > 0 && totalPages !== currentPage && (
          <Button loadMore={this.loadMore} />
        )}
      </AppDiv>
    );
  }
}
