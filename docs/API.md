# Methods



<dl>
<dt><a href="#invokeApi">invokeApi(method, [params])</a></dt>
<dd><p>Invoke any method from .files/schema.txt</p>
</dd>
<dt><a href="#sendCode">sendCode(phone_number)</a></dt>
<dd><p>Send code by phone number</p>
</dd>
<dt><a href="#signIn">signIn(phone_number, phone_code_hash, phone_code)</a></dt>
<dd><p>Sign in</p>
</dd>
<dt><a href="#signUp">signUp(phone_number, phone_code_hash, phone_code, first_name, [last_name])</a></dt>
<dd><p>Sign up</p>
</dd>
<dt><a href="#sendMessage">sendMessage(id, message)</a></dt>
<dd><p>Send message</p>
</dd>
<dt><a href="#startBot">startBot(botName)</a></dt>
<dd><p>Send bot command /start</p>
</dd>
<dt><a href="#sendSms">sendSms(phone_number, phone_code_hash)</a></dt>
<dd><p>Send code via SMS</p>
</dd>
<dt><a href="#setConfig">setConfig(config)</a></dt>
<dd><p>Configure your application</p>
</dd>
<dt><a href="#createChat">createChat(title, userIDs)</a></dt>
<dd><p>Create telegram chat (By default only creator will admin. In the future it will be changed)</p>
</dd>
<dt><a href="#getChatLink">getChatLink(chatID, [force])</a></dt>
<dd><p>Get chat invite link</p>
</dd>
<dt><a href="#getUserInfo">getUserInfo()</a></dt>
<dd><p>Get self information</p>
</dd>
<dt><a href="#getUserPhoto">getUserPhoto([type], [size])</a></dt>
<dd><p>Get user photo</p>
</dd>
<dt><a href="#logOut">logOut()</a></dt>
<dd><p>Logout from Telegram</p>
</dd>
<dt><a href="#createChannel">createChannel(title, [about])</a></dt>
<dd><p>Create channel (use carefully)</p>
</dd>
<dt><a href="#getHistory">getHistory(params)</a></dt>
<dd><p>Get chat messages</p>
</dd>
<dt><a href="#sendFile">sendFile(params)</a></dt>
<dd><p>Send file</p>
</dd>
<dt><a href="#downloadDocument">downloadDocument(doc, [progress], [autosave])</a></dt>
<dd><p>Download Telegram document</p>
</dd>
<dt><a href="#joinChat">joinChat(link)</a></dt>
<dd><p>Join to chat by link or hash</p>
</dd>
<dt><a href="#editChatAdmin">editChatAdmin(chatID, userID, [isAdmin])</a></dt>
<dd><p>Edit chat administrator</p>
</dd>
<dt><a href="#editChatTitle">editChatTitle(chat_id, title)</a></dt>
<dd><p>Edit chat title</p>
</dd>
</dl>

<a name="invokeApi"></a>

## invokeApi(method, [params])
Invoke any method from .files/schema.txt

  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | Method name |
| [params] | <code>Object</code> | Parameters |

**Example**  
```js
telegramApi.invokeApi('messages.getDialogs', {
    offset_peer: {_: 'inputPeerEmpty'},
    offset_date: 0,
    limit: 20
}).then(function(dialogResult) {
    /* Do something */
});
```
<a name="sendCode"></a>

## sendCode(phone_number)
Send code by phone number

  

| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |

**Example**  
```js
telegramApi.sendCode('some_phone_number').then(function(sent_code) {
    if (!sent_code.phone_registered) {
        // New user
    }

    // phone_code_hash will need to sign in or sign up
    window.phone_code_hash = sent_code.phone_code_hash;
});
```
<a name="signIn"></a>

## signIn(phone_number, phone_code_hash, phone_code)
Sign in

  

| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |
| phone_code_hash | <code>String</code> | Code hash (was received in sendCode method) |
| phone_code | <code>String</code> | Code by Telegram |

**Example**  
```js
telegramApi.signIn('some_phone_number', window.phone_code_hash, '000000').then(function() {
    // Sign in complete
    delete window.phone_code_hash;
}, function(err) {
    switch (err.type) {
        case 'PHONE_CODE_INVALID':
            // alert "Phone code invalid"
            break;
        case 'PHONE_NUMBER_UNOCCUPIED':
            // User not registered, you should use signUp method
            break;
    }
});
```
<a name="signUp"></a>

## signUp(phone_number, phone_code_hash, phone_code, first_name, [last_name])
Sign up

  

| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |
| phone_code_hash | <code>String</code> | Code hash (was received in sendCode method) |
| phone_code | <code>String</code> | Code by Telegram |
| first_name | <code>String</code> | User first name |
| [last_name] | <code>String</code> | User last name |

**Example**  
```js
telegramApi.signUp('some_phone_number', window.phone_code_hash, '000000', 'John', 'Doe').then(function() {
    // Sign up complete
    delete window.phone_code_hash;
});
```
<a name="sendMessage"></a>

## sendMessage(id, message)
Send message

  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Peer ID |
| message | <code>String</code> | Message text |

**Example**  
```js
telegramApi.sendMessage(9999999999, 'Hey man!').then(function(updates) {
    // Do something
});
```
<a name="startBot"></a>

## startBot(botName)
Send bot command /start

  

| Param | Type | Description |
| --- | --- | --- |
| botName | <code>String</code> | Bot name |

**Example**  
```js
telegramApi.startBot('exampleBot').then(function(updates) {
    // Was invoked telegramApi.sendMessage(bot.id, '/start');
});
```
<a name="sendSms"></a>

## sendSms(phone_number, phone_code_hash)
Send code via SMS

  

| Param | Type | Description |
| --- | --- | --- |
| phone_number | <code>String</code> | Phone number |
| phone_code_hash | <code>String</code> | Code hash (was received in sendCode method) |

**Example**  
```js
telegramApi.sendSms('some_phone_number', window.phone_code_hash).then(function() {
    // Do something
});
```
<a name="setConfig"></a>

## setConfig(config)
Configure your application

  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration object |
| config.app.id | <code>Number</code> | Application ID |
| config.app.hash | <code>String</code> | App hash |
| config.app.version | <code>String</code> | App version |
| config.server.test | <code>Array.&lt;Object&gt;</code> | List test servers |
| config.server.production | <code>Array.&lt;Object&gt;</code> | List production servers |

**Example**  
```js
telegramApi.setConfig({
    app: {
        id: 0, /* App ID */
        hash: 'qwertyasdfghzxcvbnqwertyasd', /* App hash */
        version: '0.0.0' /* App version */
    },
    server: {
        test: [
            {
                id: 2, /* DC ID */
                host: '0.0.0.0',
                port: 443
            }
        ],
        production: [
            {
                id: 2, /* DC ID */
                host: '0.0.0.0',
                port: 123
            }
        ]
    }
});
```
<a name="createChat"></a>

## createChat(title, userIDs)
Create telegram chat (By default only creator will admin. In the future it will be changed)

  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Chat title |
| userIDs | <code>Array.&lt;Number&gt;</code> | User ids list |

**Example**  
```js
telegramApi.createChat('Chat title', [123456789]).then(function(updates) {
    // If you want all users to be administrators, use it
    return telegramApi.invokeApi('messages.toggleChatAdmins', {
        chat_id: updates.chats[0].id,
        enabled: false
    });
});
```
<a name="getChatLink"></a>

## getChatLink(chatID, [force])
Get chat invite link

  

| Param | Type | Description |
| --- | --- | --- |
| chatID | <code>Number</code> &#124; <code>String</code> | Chat id |
| [force] | <code>Boolean</code> | Force generate |

**Example**  
```js
telegramApi.getChatLink(12456789, true).then(function(link) {
    // Do something
});
```
<a name="getUserInfo"></a>

## getUserInfo()
Get self information

  
**Example**  
```js
telegramApi.getUserInfo().then(function(user) {
    if (user.id) {
        // You have already signed in
    } else {
        // Open log in page
    }
});
```
<a name="getUserPhoto"></a>

## getUserPhoto([type], [size])
Get user photo

  

| Param | Type | Description |
| --- | --- | --- |
| [type] | <code>String</code> | Photo type (values: byteArray (default), base64, blob) |
| [size] | <code>String</code> | Photo size (values: big (default), small) |

**Example**  
```js
telegramApi.getUserPhoto('base64', 'small').then(function(base64) {
    $('img#avatar').attr('src', base64);
});
```
<a name="logOut"></a>

## logOut()
Logout from Telegram

  
**Example**  
```js
telegramApi.logOut().then(function() {
    setTimeout(function() {
        // Do something after logouts
        // Use setTimeout (It will be fixed)
    }, 1500);
});
```
<a name="createChannel"></a>

## createChannel(title, [about])
Create channel (use carefully)

  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Channel title |
| [about] | <code>String</code> | About text |

**Example**  
```js
telegramApi.createChannel('New channel', 'This is example channel').then(function(updates) {
    var channel = updates.chats[0];

    /**
     * WARNING!
     * If you often call this method, you will receive a reply FLOOD_WAIT_{seconds}
     */
});
```
<a name="getHistory"></a>

## getHistory(params)
Get chat messages

  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Parameters |
| params.id | <code>Number</code> | Chat ID |
| [params.take] | <code>Number</code> | How much messages you will receive (default: 15) |
| [params.skip] | <code>Number</code> | How much messages you will skip (default: 0) |
| [params.type] | <code>String</code> | Chat type (for chat and channel use 'chat' (default)) |

**Example**  
```js
telegramApi.getHistory({
    id: 12345678,
    take: 50,
    type: 'user'
}).then(function(data) {
    var totalCount = data.count || data.messages.length;

    data.messages.forEach(function(message) {
        /**
         * message.from_id - Sender ID
         * message.date - Date
         * message.media - If message is Document or Photo
         * message.message - Message text
         */
    });
});
```
<a name="sendFile"></a>

## sendFile(params)
Send file

  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Parameters |
| params.id | <code>Number</code> | Peer ID |
| params.type | <code>String</code> | Chat type (for chat and channel use 'chat' (default)) |
| params.file | <code>File</code> | File |
| [params.caption] | <code>String</code> | File caption |

**Example**  
```js
telegramApi.sendFile({
    id: 123456789,
    type: 'user',
    file: $('input[type=file]').val(),
    caption: 'This is file'
}).then(function(updates) {
    // Do something
});
```
<a name="downloadDocument"></a>

## downloadDocument(doc, [progress], [autosave])
Download Telegram document

  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>Object</code> | Telegram document |
| [progress] | <code>function</code> | Progress callback |
| [autosave] | <code>Boolean</code> | Save file on device |

**Example**  
```js
telegramApi.getHistory({
    id: 123456789,
    type: 'user',
    take: 1,
    skip: 0
}).then(function(data) {
    var message = data.messages[0];
    var doc = message.media.document;

    telegramApi.downloadDocument(doc, function(downloaded, total) {
        console.log('Loaded ' + downloaded + ' bytes. Total ' + total + ' bytes');
    }).then(function(result) {
        /**
         * result.bytes - file data
         * result.fileName - file name
         * result.type - file MIME-type
         */
    });
});
```
<a name="joinChat"></a>

## joinChat(link)
Join to chat by link or hash

  

| Param | Type | Description |
| --- | --- | --- |
| link | <code>String</code> | Chat invite link or hash |

**Example**  
```js
telegramApi.joinChat('https://telegram.me/joinchat/some-hash').then(function(updates) {
    // Do something
});
```
<a name="editChatAdmin"></a>

## editChatAdmin(chatID, userID, [isAdmin])
Edit chat administrator

  

| Param | Type | Description |
| --- | --- | --- |
| chatID | <code>Number</code> | Chat ID |
| userID | <code>Number</code> | User ID |
| [isAdmin] | <code>Boolean</code> | Admin status (default: true) |

**Example**  
```js
telegramApi.editChatAdmin(123456789, 987654321, false).then(function() {
    // Do something
});
```
<a name="editChatTitle"></a>

## editChatTitle(chat_id, title)
Edit chat title

  

| Param | Type | Description |
| --- | --- | --- |
| chat_id | <code>Number</code> | Chat ID |
| title | <code>String</code> | New title |

**Example**  
```js
telegramApi.editChatTitle(123456789, 'New title').then(function() {
    // Do something
});
```


## To be continued