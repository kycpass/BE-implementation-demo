const EFrequest = require('./request');

const getToken = async () => {
  try{
    const token = await EFrequest({
      method:"post",
      data: {
        referrer: "http://localhost"
      },
      path:"sdk-tokens"
    });
    return token.data;
  }catch(err) {
    return (err.response && err.response.data) || "Something went wrong!";
  };
};

module.exports = getToken;
