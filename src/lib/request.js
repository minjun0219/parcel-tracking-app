import fetch from 'node-fetch';

export const queryString = (obj) => {
  const params = [];
  Object.keys(obj).forEach((key) => {
    params.push([key, encodeURIComponent(obj[key] || '')].join('='));
  });
  return params.length > 0 ? `?${params.join('&')}` : '';
}

export const request = async (uri) => {
  const apiUrl = Array.isArray(uri)
      ? uri[0] + queryString(uri[1]) : uri;
  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Accpet': 'application/json',
    }
  });

  return res.json();
};

export default request;
