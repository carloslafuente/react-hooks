import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = ({ title, subtitle }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </Fragment>
  );
};

App.prototypes = {
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitle: '',
};

export default App;
