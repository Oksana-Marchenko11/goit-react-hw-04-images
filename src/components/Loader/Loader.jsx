import { Audio } from 'react-loader-spinner';
import React from 'react';
import { Component } from 'react';

export class Loader extends Component {
  render() {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        // wrapperClass
      />
    );
  }
}
