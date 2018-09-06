import React from 'react';
import PropTypes from 'prop-types';


// TODO: Move to a CladUI CSS file
const navStyle = {
  backgroundColor: '#5E52CF',
  padding: '1%',
  fontSize: '0.8em',
  textAlign: 'center',
  width: '104%',
  marginLeft: '-3%',
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
