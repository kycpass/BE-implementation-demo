if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;
const API_ENDPOINT = process.env.API_ENDPOINT || "https://stagingapi.kyc-pass.com/v1/";
const REFERRER = "https://fe-sandbox-demo.herokuapp.com/";

module.exports = {
  API_TOKEN,
  API_ENDPOINT,
  REFERRER
};
