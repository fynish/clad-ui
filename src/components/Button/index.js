import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  let buttonRank = 'bg-default';
  if (props.rank) {
    buttonRank = `bg-${props.rank}`;
  }
  return (
    <button
      className={`clad button ${buttonRank}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  onClick: null,
  rank: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  rank: PropTypes.string,
  children: PropTypes.node.isRequired, // TODO: Is this the ideal PropType?
};

export default Button;
