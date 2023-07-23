import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(({ id, title }) => {
      return (
        <button className={css.btn} key={id} name={id} onClick={onLeaveFeedback} >
          {title}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  onLeaveFeedback: PropTypes.func,
}