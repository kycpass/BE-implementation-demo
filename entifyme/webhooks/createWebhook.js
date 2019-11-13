const EFrequest = require('../request');

// POST https://api.kyc-pass.com/v1/webhooks
const createWebhook = async (data)=>{
  try{
    const hooks = await EFrequest({
      method: "post",
      path: "webhooks",
      data
    });
    return hooks.data;
  }catch(err) {
    return (err.response && err.response.data) || "Something went wrong!";
  }
}

module.exports = createWebhook;
