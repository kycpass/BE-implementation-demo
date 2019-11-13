const EFrequest = require('../request');

//GET https://api.kyc-pass.com/v1/webhooks
const getWebhookList = () => {
  return EFrequest({
    path: "webhooks"
  });
}

// GET https://api.kyc-pass.com/v1/webhooks/{webhookId}
const getWebhook = (webhookId) => {
  return EFrequest({
    path: `webhooks/${webhookId}`,
  });
}

module.exports = {
  getWebhookList,
  getWebhook
};
