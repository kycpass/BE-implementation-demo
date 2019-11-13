const EFrequest = require('../request');

// POST https://api.kyc-pass.com/v1/webhooks
const createWebhook = (data) => {
  return EFrequest({
    method: "post",
    path: "webhooks",
    data
  });
}

module.exports = createWebhook;
