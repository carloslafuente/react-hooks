import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    setCounter(counter + 1);
  };

  const handleRemove = (e) => {
    setCounter((c) => c - 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button className='button' onClick={handleAdd}>
        +
      </button>
      <button className='button' onClick={handleReset}>
        Reset
      </button>
      <button className='button' onClick={handleRemove}>
        -
      </button>
    </Fragment>
  );
};

CounterApp.prototypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 123456,
};

export default CounterApp;
