/* eslint-disable max-len */
import env from 'dotenv';
import path from 'path';

env.config({
  path: path.join(__dirname, `../../env/.env.${process.env.NODE_ENV}`),
});
process.env.ENVIRONMENT = process.env.ENVIRONMENT || process.env.NODE_ENV;

class Config {
  public static DEV: boolean = process.env.ENVIRONMENT === 'dev';

  public static TEST: boolean = process.env.NODE_ENV === 'test';

  public static SERVERS = {
    http: {
      hostname: process.env.HTTP_HOST || '0.0.0.0',
      port: parseInt(process.env.HTTP_PORT, 10) || 3000,
    },
  };

  public static GOOGLE_MAPS = {
    key: process.env.GOOGLE_MAPS_API_KEY,
    path: (query: any) => `https://maps.googleapis.com/maps/api/place/textsearch/json?${query}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
  };
}

export default Config;
