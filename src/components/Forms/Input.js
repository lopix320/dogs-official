import React from 'react';
import styles from './Input.module.css';
const Input = ({ label, type }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type={type} className={styles.Input} />
    </div>
  );
};

export default Input;
