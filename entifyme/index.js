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
  try {
    const resp = await getToken();
    return res.send(resp);
  }catch(err) {
    return res.status((err.response && err.response.status || 500)).send((err.response && err.response.data) || "Something went wrong!")
  }
})

// webhooks
entifyme.post('/createWebhook', async (req, res) => {
  // input data can be validated
  try {
    const resp = await createWebhook(req.body);
    return res.send(resp.data);
  }catch(err) {
    return res.status((err.response && err.response.status || 500)).send((err.response && err.response.data) || "Something went wrong!")
  }
})

entifyme.put('/updateWebhook/:webhookId', async (req, res) => {
  // input data can be validated
  try {
    const resp = await updateWebhook(req.body, req.params.webhookId);
    return res.send(resp.data);
  }catch(err) {
    return res.status((err.response && err.response.status || 500)).send((err.response && err.response.data) || "Something went wrong!")
  }
})

entifyme.get('/getWebhookList', async (req, res) => {
  try {
    const resp = await getWebhookList();
    return res.send(resp);
  }catch(err) {
    return res.status((err.response && err.response.status || 500)).send((err.response && err.response.data) || "Something went wrong!")
  }
})

entifyme.get('/getWebhook/:webhookId', async (req, res) => {
  // input data can be validated
  try {
    const resp = await getWebhook(req.params.webhookId);
    return res.send(resp);
  }catch(err) {
    return res.status((err.response && err.response.status || 500)).send((err.response && err.response.data) || "Something went wrong!")
  }
})

module.exports = entifyme;
