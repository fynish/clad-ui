import React from 'react';
import PropTypes from 'prop-types';


const Column = props => (
  <div className="clad column" style={{ flex: props.flex }}>
    {props.children}
  </div>
);

Column.defaultProps = {
  flex: '1',
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.string,
};

export default Column;
