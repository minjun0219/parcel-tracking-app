import React from 'react';
import Field from './Field';

import styles from './ButtonField.module.css';

const ButtonField = ({ type, label }) => {
  return (
    <Field>
      <button
        type={type}
        className={styles.button}
      >
        {label}
      </button>
    </Field>
  );
}

export default ButtonField;
