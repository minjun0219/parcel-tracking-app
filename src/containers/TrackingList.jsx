import React from 'react';

import TrackingItem from '../components/TrackingItem';

const TrackingForm = ({ list }) => (
  <>
    {list.map(({
      time,
      timeString,
      where,
      kind,
    }) => (
      <TrackingItem
        key={time}
        time={timeString}
        where={where}
        kind={kind}
      />
    ))}
  </>
);

export default TrackingForm;
