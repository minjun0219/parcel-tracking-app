import express from 'express';
import apiTracking from './api/tracking';
import apiCompany from './api/company';

const app = express();

app.get('/api/tracking', apiTracking);
app.get('/api/company', apiCompany);

app.listen(4000, () => {
  console.log('Starting Server...');
});
