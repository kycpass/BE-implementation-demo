const EFrequest = require('../request');

//GET https://api.kyc-pass.com/v1/webhooks
const getWebhookList = async ()=>{
  try{
    const hooks = await EFrequest({
      path: "webhooks"
    });
    return hooks.data;
  }catch(err) {    
    return (err.response && err.response.data) || "Something went wrong!";
  }
}

// GET https://api.kyc-pass.com/v1/webhooks/{webhookId}
const getWebhook = async (webhookId)=>{
  try{
    const hooks = await EFrequest({
      path: `webhooks/${webhookId}`,
    });
    return hooks.data;
  }catch(err) {
    return (err.response && err.response.data) || "Something went wrong!";
  }
}

module.exports = {
  getWebhookList,
  getWebhook
};
