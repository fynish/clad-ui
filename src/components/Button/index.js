import React from 'react';
import PropTypes from 'prop-types';

import { colorButtonBg } from '../../theme/';

const buttonDefault = {
  backgroundColor: colorButtonBg,
  border: '1px solid black',
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.8em',
};

const Button = props => (
  <button
    className="clad button"
    style={buttonDefault}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired, // TODO: Is this the ideal PropType?
};

export default Button;
