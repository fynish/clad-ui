import React from 'react';
import PropTypes from 'prop-types';

/*
  - - - - -
  TABLE: Main
  - - - - -
*/

export const CuTable = props => (
  <table className="clad table">
    {props.children}
  </table>
);

CuTable.defaultProps = {
  children: null,
};

CuTable.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
};

/*
  - - - - -
  TABLE: Row
  - - - - -
*/

export const CuTd = props => (
  <td className="clad td">
    {props.children}
  </td>
);

CuTd.defaultProps = {
  children: null,
};

CuTd.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
};

/*
  - - - - -
  TABLE: Cell
  - - - - -
*/

export const CuTr = props => (
  <tr className="clad tr">
    {props.children}
  </tr>
);

CuTr.defaultProps = {
  children: null,
};

CuTr.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
};
