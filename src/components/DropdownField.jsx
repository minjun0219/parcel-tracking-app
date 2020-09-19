import React from 'react';
import Field from './Field';

import styles from './DropdownField.module.css';

const DropdownField = ({ label, name, value, options, onChange }) => {
  return (
    <Field
      label={label}
      className={styles.dropdown}
    >
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </Field>
  );
}

export default DropdownField;
