import React from 'react';
import styles from './Input.module.css';
const Input = ({ label, type, name, value, setState }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={({ target }) => setState(target.value)}
        className={styles.input}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
