import React from 'react';
import PropTypes from 'prop-types';

/*
  - - - - -
  Select: Main
  - - - - -
*/

export const CuSelect = props => (
  <select className="clad select" onChange={props.onChange}>
    {props.children}
  </select>
);

CuSelect.defaultProps = {
  children: null,
  onChange: undefined,
};

CuSelect.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
  onChange: PropTypes.func,
};

/*
  - - - - -
  Select: Option
  - - - - -
*/

export const CuOption = props => (
  <option value={props.value} className="clad option">
    {props.children}
  </option>
);

CuOption.defaultProps = {
  children: null,
  value: null,
};

CuOption.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
