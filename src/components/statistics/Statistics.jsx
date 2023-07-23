import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  rated,
  total,
  positivePercentage,
}) => {
  const { good, neutral, bad } = rated;
  return (
    <div className={css.stat}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}</p>
    </div>
  );
};

Statistics.propTypes = {
  rated: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};