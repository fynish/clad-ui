import React from 'react';
import PropTypes from 'prop-types';

import loadIcon from '../../assets/glyphs/loading.svg';
import loadIconInverse from '../../assets/glyphs/loading_inv.svg';


function Loading(props) {
  if (!props.inverse) {
    return (
      <img
        src={loadIcon}
        className={`clad spin size-${props.size}`}
        alt="Loading..."
      />
    );
  }
  return (
    <img
      src={loadIconInverse}
      className={`clad spin size-${props.size}`}
      alt="Loading..."
    />
  );
}


Loading.defaultProps = {
  inverse: false,
  size: 'm',
};

Loading.propTypes = {
  inverse: PropTypes.bool,
  size: PropTypes.string,
};

export default Loading;
