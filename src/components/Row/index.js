import React from 'react';
import PropTypes from 'prop-types';


const Row = props => (
  <div className="clad row">
    {props.children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
