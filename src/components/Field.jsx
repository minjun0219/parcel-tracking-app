import React from 'react';
import cx from 'classnames';

import styles from './Field.module.css';

const Field = ({ label, children, className }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.label}>
      {label}
    </div>
    <div className={styles.child}>
      {children}
    </div>
  </div>
);

export default Field;
