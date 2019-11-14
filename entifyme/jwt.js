const EFrequest = require('./request');
const { REFERRER } = require('./consts');
const getToken = () => {
  return EFrequest({
    method:"post",
    data: {
      referrer: REFERRER
    },
    path:"sdk-tokens"
  });
};

module.exports = getToken;
