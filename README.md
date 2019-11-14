# BE-sandbox
This is a nodejs/express server implementation to demonstrate API/Webhook integration with Entifyme.  
Use this [Demo APP](https://fe-sandbox-demo.herokuapp.com) to interact with this backend.  

## Installation  
Before you start make sure that you have requested API Token from support@entifyme.com  
1. Run `npm install`  
2. Create a `.env` file in your root directory and configure `API_TOKEN` and `API_ENDPOINT`.(Look at `.env.example`)
In this project we are using `dotenv` package to handle environmental variables. [More](https://www.npmjs.com/package/dotenv)
3. Start the service with `node index.js`  

**Note:**  
For live env : `API_ENDPOINT`: https://api.kyc-pass.com/v1/  
For staging env : `API_ENDPOINT`: https://stagingapi.kyc-pass.com/v1/

For production env make sure you have `API_TOKEN` and `API_ENDPOINT` in env variables.  

---

All the *Entifyme* related endpoints are handled in a dedicated express route `/entifyme`.  

### Integrate with existing project:  
Dependency:  
1.Axios  
2.Express  
3.Dotenv  

The folder `./entifyme` can directly copied to your root of existing *express-js* project.  
```
const entifyme = require('./entifyme');

// you can implement your own auth layer here.
app.use('/entifyme', entifyme);
```

---

Once the app is running, the following routes will be avaiable:  


| Route  | Method  | Body | Description  |
|---|---|---|---|
| `/entifyme/getToken`  | `POST`  |  `{referral:<authorized domain name>}` | Generate a JWT token to use it on client side to initialize the SDK *<br>`/sdk-tokens`   |
| `/entifyme/createWebhook`  | `POST`  |  `{url, enabled, eventType}` | Register a webhook<br> Entifyme URL: `/webhooks` |
| `/entifyme/updateWebhook/:webhookId`  | `PUT`  | `{url, enabled, eventType}` | Update an existing webhook<br> Entifyme URL:`/webhooks/{webhookId}` |
| `/entifyme/getWebhookList`  | `GET`  |   | Get the list of registered webhooks<br> Entifyme URL:`/webhooks`  |
| `/entifyme/getWebhook`  | `GET`  |   | Get detail of a webhook<br> Entifyme URL:`/webhooks/{webhookId}` |

**Note:**  To know more about the request builder, check `./entifyme/request.js`  
**Important!!**  
Usage of token is restricted to a specific domain (Your client URL). This is to prevent someone else using your SDK token to make requests. Replace the `REFERRER` with your own client URL in `./entifyme/consts.js`.  For example, if you want to mount the SDK in www.xyz.com website, generate the token with `{referral: www.xyz.com}`

### Webhook registration and receiving payload:  

For testing purpose, a dummy webhook handler is created at route `/webhookHandler`. To receive payload at this route, register a webhook with the url `https://<your_domain_name>/webhookhandler`  
> It'll print in the terminal whenever there is a incoming payload.

You can create custom webhook receiving endpoints or use a single endpoint and hadle it with custom implementation.
Modify the code at `./webhookHandler.js`  

#### Test locally:  
As a secure endpoint is required to create webhook and receive incoming payload, you can use https://ngrok.com/ to create tunnel. It'll provide you a secure (https) url which will be accessible form the public internet.  

---

### Check if the incoming payload is valid:  
All the incoming request will have a token in the header `X-Signature`, you can use this to verify the incoming payload.
Sample Code: 
```
const isValid = ({payload, secret, signature}) => {
  if(payload.constructor === Object) {
    payload = JSON.stringify(payload);
  }
  if(!Buffer.isBuffer(payload)) {
    payload = Buffer.from(payload, 'utf8');
  }
  const hash = crypto.createHmac('sha256', secret);
  hash.update(payload);
  const digest = hash.digest('hex');
  return digest === signature.toLowerCase();
};
```
In above code, the `secret` is the token you get at the time of webhook creation.  

---

The demo implementation is hosted at https://fe-sandbox-demo.herokuapp.com  
Frontend implementation source code - [Github link](https://github.com/kycpass/FE-integration-demo).  
