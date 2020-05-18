import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, fallbackSrc, isLazy }) => (
  <img
    src={isLazy ? fallbackSrc : src}
    alt={alt}
    className={isLazy ? 'lazy' : ''}
    data-src={src}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  isLazy: PropTypes.bool,
}

Image.defaultProps = {
  isLazy: false
}

export default Image;
