const {
  getWebhookList,
  getWebhook
} = require('./getWebhook');

const createWebhook = require('./createWebhook');
const updateWebhook = require('./updateWebhook');

module.exports = {
  getWebhookList,
  getWebhook,
  createWebhook,
  updateWebhook
};
