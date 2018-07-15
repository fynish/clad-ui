import React from 'react';
import PropTypes from 'prop-types';

/*
  - - - - -
  Select: Main
  - - - - -
*/

export const CuSelect = props => (
  <select
    className="clad select"
    defaultValue={props.defaultValue}
    onChange={props.onChange}
    value={props.value}
  >
    {props.children}
  </select>
);

CuSelect.defaultProps = {
  children: null,
  defaultValue: undefined,
  onChange: undefined,
  value: undefined,
};

CuSelect.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
