// this is a demo function to store the responses temporarily
// you can replace this with your own implementation
const webhookRespCache = [];

const processWebhook = (data) => {
  webhookRespCache.push(data);
  return webhookRespCache
}

module.exports = processWebhook;
