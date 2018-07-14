import React from 'react';
import PropTypes from 'prop-types';

import { colorCardBg } from '../../theme/';

const cardDefault = {
  backgroundColor: colorCardBg,
  border: '1px solid black',
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.8em',
};

const Card = props => (
  <div style={cardDefault} className="clad card">
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired, // TODO: Is this the ideal PropType?
};

export default Card;
