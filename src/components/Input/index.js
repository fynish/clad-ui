import React from 'react';
import PropTypes from 'prop-types';


const Input = props => (
  <input
    defaultValue={props.defaultValue}
    className="clad input"
    value={props.value}
  />
);


Input.defaultProps = {
  defaultValue: undefined,
  value: undefined,
};

Input.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
