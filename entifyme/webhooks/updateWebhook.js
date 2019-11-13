const EFrequest = require('../request');

// PUT https://api.kyc-pass.com/v1/webhooks/{webhookId}
const updateWebhook = async (data, webhookId)=>{
  try{
    const hooks = await EFrequest({
      method: "put",
      path: `webhooks/${webhookId}`,
      data
    });
    return hooks.data;
  }catch(err) {
    return (err.response && err.response.data) || "Something went wrong!";
  }
}

module.exports = updateWebhook;
