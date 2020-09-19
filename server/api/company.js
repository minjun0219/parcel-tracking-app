import { Request, Response } from 'express';

import { getCompany } from '../lib/api';

export default async (req, res) => {
  const data = await getCompany();
  res.json({ data });
};
