import { Request, Response } from 'express';

import { getTracking } from '../lib/api';

export default async (req, res) => {
  const data = await getTracking({
    code: req.query.code,
    invoice: req.query.invoice,
  });
  res.json({ data });
};
