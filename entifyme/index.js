const { Router } = require('express');
const entifyme = Router();
const getToken = require('./jwt');
const {
  getWebhook,
  getWebhookList,
  createWebhook,
  updateWebhook
} = require('./webhooks');

entifyme.get('/', (req, res) => {
  return res.send("Entifyme endpoints are up!");
})

entifyme.post('/getToken', async (req, res) => {
  const resp = await getToken();
  return res.send(resp);
})

// webhooks
entifyme.post('/createWebhook', async (req, res) => {
  // input data can be validated
  const resp = await createWebhook(req.body);
  return res.send(resp);
})

entifyme.put('/updateWebhook/:webhookId', async (req, res) => {
  // input data can be validated
  const resp = await updateWebhook(req.body, req.params.webhookId);
  return res.send(resp);
})

entifyme.get('/getWebhookList', async (req, res) => {
  const resp = await getWebhookList();
  return res.send(resp);
})

entifyme.get('/getWebhook/:webhookId', async (req, res) => {
  // input data can be validated
  const resp = await getWebhook(req.params.webhookId);
  return res.send(resp);
})

module.exports = entifyme;
