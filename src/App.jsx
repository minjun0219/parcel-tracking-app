import React, { useCallback, useState } from 'react';

import Wrapper from './components/Wrapper';
import TrackingForm from './containers/TrackingForm';
import TrackingList from './containers/TrackingList';
import { getTracking } from './lib/api'

const App = () => {
  const [trackingList, setTrackingList] = useState([]);

  const handleSubmit = useCallback(async (event, data) => {
    const res = await getTracking({
      code: data.code,
      invoice: data.number,
    });
    if (res.data.trackingDetails) {
      setTrackingList(res.data.trackingDetails.sort((a, b) => (b.time - a.time)));
    } else if (!res.data.status && res.data.msg) {
      alert(res.data.msg);
    }
  }, []);

  return (
    <Wrapper>
      <TrackingForm onSubmit={handleSubmit} />
      <TrackingList list={trackingList} />
    </Wrapper>
  );
};

export default App;
