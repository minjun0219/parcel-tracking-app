import apiRequest from '../../src/lib/request';
import './dotenv';

const API_HOST = process.env.SWEET_TRACKING_API_HOST;
const API_KEY = process.env.SWEET_TRACKING_API_KEY;

export const getTracking = ({ code, invoice }) => apiRequest(
  [new URL('/api/v1/trackingInfo', API_HOST).toString(), {
    t_key: API_KEY,
    t_code: code,
    t_invoice: invoice,
  }]
);

export const getCompany = () => apiRequest(
  [new URL('/api/v1/companylist', API_HOST).toString(), {
    t_key: API_KEY,
  }]
);

