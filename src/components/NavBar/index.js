import React from 'react';
import PropTypes from 'prop-types';

import { colorNavBg } from '../../theme/';


const navStyle = {
  backgroundColor: colorNavBg,
  padding: '1%',
  fontSize: '0.8em',
  textAlign: 'center',
  width: '104%', // TODO: remove this temp. garbage
  marginLeft: '-3%', // TODO: remove this temp. garbage
  color: '#0DFFAF',
  letterSpacing: '0.1em',
};

const NavBar = props => (
  <div style={navStyle} className="clad navbar">
    {props.children}
  </div>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired, // TODO: Is this the ideal PropType?
};

export default NavBar;
