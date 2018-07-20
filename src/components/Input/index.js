import React from 'react';
import PropTypes from 'prop-types';


const Input = props => (
  <input
    {...props}
    className="clad input"
  />
);

/*
 Removed in favor of {...props}
    defaultValue={props.defaultValue}
    onChange={props.onChange}
    type={props.type}
    value={props.value}
*/


Input.defaultProps = {
  defaultValue: undefined,
  onChange: undefined,
  type: undefined,
  value: undefined,
};

Input.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
