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
  TABLE: Head
  - - - - -
*/

export const CuThead = props => (
  <thead className="clad thead">
    {props.children}
  </thead>
);

CuThead.defaultProps = {
  children: null,
};

CuThead.propTypes = {
  children: PropTypes.node,
};


/*
  - - - - -
  TABLE: Body
  - - - - -
*/

export const CuTbody = props => (
  <tbody className="clad tbody">
    {props.children}
  </tbody>
);

CuTbody.defaultProps = {
  children: null,
};

CuTbody.propTypes = {
  children: PropTypes.node,
};


/*
  - - - - -
  TABLE: Foot
  - - - - -
*/

export const CuTfoot = props => (
  <tfoot className="clad tfoot">
    {props.children}
  </tfoot>
);

CuTfoot.defaultProps = {
  children: null,
};

CuTfoot.propTypes = {
  children: PropTypes.node,
};


/*
  - - - - -
  TABLE: Row
  - - - - -
*/

export const CuTd = props => (
  <td className="clad td" colSpan={props.colSpan}>
    {props.children}
  </td>
);

CuTd.defaultProps = {
  children: null,
  colSpan: undefined,
};

CuTd.propTypes = {
  children: PropTypes.node, // TODO: Is this the ideal PropType?
  colSpan: PropTypes.string,
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
  children: PropTypes.node,
};
