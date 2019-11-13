const EFrequest = require('../request');

// PUT https://api.kyc-pass.com/v1/webhooks/{webhookId}
const updateWebhook = (data, webhookId)=>{
  return EFrequest({
    method: "put",
    path: `webhooks/${webhookId}`,
    data
  });
}

module.exports = updateWebhook;
