const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const entifyme = require('./entifyme');
const processWebhook = require('./webhookHandler');

let app = express();
app.server = http.createServer(app);
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Demo implementation of Entifyme integration');
});

app.post('/webhookHandler', (req, res) => {
	// you'll receive the expected payload
	// following code can be replaced with custom implementation
	console.log(req.body) // debugging purpose
	const resp = processWebhook(req.body);
	res.send(resp);
});

// entifyme endpoints are added to this route.
// you can secure your route right here.
app.use('/entifyme', entifyme);

app.server.listen(process.env.PORT || 4000, () => {
  console.log(`Started on port ${app.server.address().port}`);
});
