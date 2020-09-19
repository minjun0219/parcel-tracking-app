import React from 'react';

import styles from './Wrapper.module.css';

const Wrapper = ({ children }) => (
  <div className={styles.wrap}>
    {children}
  </div>
);

export default Wrapper;
