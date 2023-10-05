import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLoad } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonLoad onClick={loadMore}>Load more</ButtonLoad>;
};

Button.propTypes = {
  onClick: PropTypes.func,
};
