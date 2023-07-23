import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
    <h3 className={css.msg}>{message}</h3>
)

Notification.propTypes = {
    message: PropTypes.string,
}