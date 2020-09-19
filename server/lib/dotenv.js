import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const { NODE_ENV } = process.env;
const cwd = process.cwd();

[
  '.env',
  '.env.local',
  `.env.${NODE_ENV}`,
  `.env.${NODE_ENV}.local`,
].forEach(fileName => {
  const filePath = path.join(cwd, fileName);
  if (fs.existsSync(filePath)) {
    dotenvExpand(dotenv.config({ path: filePath }));
  }
});
