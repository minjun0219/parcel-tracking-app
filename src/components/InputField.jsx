import React from 'react';
import Field from './Field';

import styles from './InputField.module.css';

const InputField = ({ label, name, value, onChange }) => {
  return (
    <Field
      label={label}
    >
      <input
        type="tel"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </Field>
  );
}

export default InputField;
