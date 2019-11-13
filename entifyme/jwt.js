const EFrequest = require('./request');

const getToken = () => {
  return EFrequest({
    method:"post",
    data: {
      referrer: "http://localhost"
    },
    path:"sdk-tokens"
  });
};

module.exports = getToken;
