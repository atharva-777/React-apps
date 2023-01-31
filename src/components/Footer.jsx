import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div>
      This is Footer
      <h1>Good Bye {props.name}</h1>
    </div>
  );
}

Footer.propTypes = {
    name : PropTypes.string,
}

Footer.defaultProps = {
    name : 'Atharva',
}

export default Footer;
