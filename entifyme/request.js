const axios = require('axios');
const { API_TOKEN, API_ENDPOINT } = require('./consts');

const EFrequest = ({method="get", url=API_ENDPOINT, path="", data={}}) => {
  return axios({
    method: method,
    url: `${url}${path}`,
    data: data,
    headers: {
      "Authorization": `Bearer ${API_TOKEN}`
    }
  });
};

module.exports = EFrequest;
