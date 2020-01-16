# Telegram Api for Vuejs

Based on [**TelegramApiJs**](https://github.com/sunriselink/TelegramApi)

## Getting started

1) Install package via npm
```
npm install telegram-api-vue
```

2) Import in your ```main.js```
```
import telegramApi from './plugins/telegram';
```

3) Create file ```telegram.js``` in ```plugins``` folder

4) Put config in created file ```telegram.js```
```
/* You should register your application on https://my.telegram.org/ */

import * as telegramApi from 'telegram-api-vue/dist/telegramApi.min';

telegramApi.setConfig({
  app: {
    id: 1167695, /* App ID */
    hash: 'b5fbdce2ae649419c889c1eb970407bc', /* App hash */
    version: '1.0.0' /* App version */
  },
  server: {
    test: [
      {
        id: 2, /* DC ID */
        host: '149.154.167.40',
        port: 443
      }
    ],
    production: [
      {
        id: 2, /* DC ID */
        host: '149.154.167.50',
        port: 443
      }
    ]
  }
});

export default telegramApi;
```

5) Check your status
```
telegramApi.getUserInfo().then(function(user) {
    if (user.id) {
        // You have already signed in
    } else {
        // Log in
    }
});
```

[API documentation](./docs/API.md)
