import { readFileSync } from 'fs';

export const config = JSON.parse(readFileSync(process.cwd() + '/config/config.json', 'utf8'));