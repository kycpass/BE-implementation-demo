# BE-sandbox
This is a nodejs/express server implementation to demonstrate API/Webhook integration with Entifyme.

## Installation  
Before you start make sure that you have requested API Token from support@entifyme.com  
1. Run `npm install`  
2. Create a `.env` file in your root directory and configure `API_TOKEN` and `API_ENDPOINT`.(Look at `.env.example`)
In this project we are using `dotenv` package to handle environmental variables. [More](https://www.npmjs.com/package/dotenv)
3. Start the service with `node index.js`  

**Note:**  
`API_ENDPOINT`:
For live env : https://api.kyc-pass.com/v1/  
For staging env : https://stagingapi.kyc-pass.com/v1/

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

// you can secure your route here.
app.use('/entifyme', entifyme);
```

---

Once the app is running, the following routes will be avaiable:  


| Route  | Method  | Body | Description  |
|---|---|---|---|
| `/entifyme/getToken`  | `POST`  |  `{referral:<authorized domain name>}` | Generate a JWT token to use it on client side to initialize the SDK<br>`/sdk-tokens`   |
| `/entifyme/createWebhook`  | `POST`  |  `{url, enabled, eventType}` | Register a webhook<br> Entifyme URL: `/webhooks` |
| `/entifyme/updateWebhook/:webhookId`  | `PUT`  | `{url, enabled, eventType}` | Update an existing webhook<br> Entifyme URL:`/webhooks/{webhookId}` |
| `/entifyme/getWebhookList`  | `GET`  |   | Get the list of registered webhooks<br> Entifyme URL:`/webhooks`  |
| `/entifyme/getWebhook`  | `GET`  |   | Get detail of a webhook<br> Entifyme URL:`/webhooks/{webhookId}` |

Note: To know more about the request builder check `./entifyme/request.js` .

### Webhook registration and receiving payload:  

For testing purpose, a dummy webhook handler is created at route `/webhookHandler`. To receive payload at this route, register a webhook with the url `https://<your_domain_name>/webhookhandler`  
> It'll print in the terminal whenever there is a incoming payload.

You can create custom webhook receiving endpoints or use a single endpoint and hadle it with custom implementation.
Modify the code at `./webhookHandler.js`  

#### Test locally:  
As a secure endpoint is required to create webhook and receive incoming payload, you can use https://ngrok.com/ to create tunneling. It'll provide you a secure (https) url which will be accessible form the public internet.  

---

The demo server is hosted at https://be-sandbox-demo.herokuapp.com
