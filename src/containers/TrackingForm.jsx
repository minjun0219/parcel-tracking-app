import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DropdownField from '../components/DropdownField';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import { getCompany } from '../lib/api'

const TrackingForm = ({ onSubmit }) => {
  const [companyList, setCompanyList] = useState([]);
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { data } = await getCompany();
      const list = data.Company.map(item => ({
        name: item.Name,
        value: item.Code,
      }));
      setTrackingCode(list[0].value);
      setCompanyList(list);
    }
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    return onSubmit(event, {
      code: trackingCode,
      number: trackingNumber,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DropdownField
          label="택배사"
          options={companyList}
          value={trackingCode}
          onChange={(event) => setTrackingCode(event.target.value)}
        />
        <InputField
          label="송장번호"
          value={trackingNumber}
          onChange={(event) => setTrackingNumber(event.target.value)}
        />
        <ButtonField
          label="택배조회"
          type="submit"
        />
      </form>
    </>
  );
}

TrackingForm.propTypes = {
  onSubmit: PropTypes.func,
};

TrackingForm.defaultProps = {
  onSubmit() {},
};

export default TrackingForm;
