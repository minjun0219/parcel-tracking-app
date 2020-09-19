import request from './request';

export const getTracking = ({ code, invoice }) => request(
  ['/api/tracking', { code, invoice }]
);

export const getCompany = () => request(
  '/api/company',
);

