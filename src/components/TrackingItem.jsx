import React from 'react';

import styles from './TrackingItem.module.css';

const TrackingItem = ({ where, kind, time }) => (
  <div className={styles.item}>
    <p className={styles.time}>
      {time}
    </p>
    <p>
      {where} / {kind}
    </p>
  </div>
);

export default TrackingItem;
