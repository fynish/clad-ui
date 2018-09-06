import React from 'react';
import PropTypes from 'prop-types';


const Card = props => (
  <div className={`clad card bg-${props.color}`}>
    {props.children}
  </div>
);

Card.defaultProps = {
  color: 'default',
};

Card.propTypes = {
  children: PropTypes.node.isRequired, // TODO: Is this the ideal PropType?
  color: PropTypes.string,
};

export default Card;
