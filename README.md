# Getting started

Ytel API version 3

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Ytel%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Ytel%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `YtelAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Ytel%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Ytel%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Ytel%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Ytel%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Ytel APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Ytel%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ShortCodeController](#short_code_controller)
* [AreaMailController](#area_mail_controller)
* [PostCardController](#post_card_controller)
* [LetterController](#letter_controller)
* [CallController](#call_controller)
* [PhoneNumberController](#phone_number_controller)
* [SMSController](#sms_controller)
* [SharedShortCodeController](#shared_short_code_controller)
* [ConferenceController](#conference_controller)
* [CarrierController](#carrier_controller)
* [EmailController](#email_controller)
* [AccountController](#account_controller)
* [SubAccountController](#sub_account_controller)
* [AddressController](#address_controller)
* [RecordingController](#recording_controller)
* [TranscriptionController](#transcription_controller)
* [UsageController](#usage_controller)

## <a name="short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ShortCodeController") ShortCodeController

### Get singleton instance

The singleton instance of the ``` ShortCodeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ShortCodeController;
```

### <a name="create_dedicatedshortcode_listshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createDedicatedshortcodeListshortcode") createDedicatedshortcodeListshortcode

> Retrieve a list of Short Code assignment associated with your Ytel account.


```javascript
function createDedicatedshortcodeListshortcode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list Short Code Assignment sent from this Short Code |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'Shortcode';
        input['page'] = 'page';
        input['pagesize'] = 'pagesize';

    controller.createDedicatedshortcodeListshortcode(input, function(error, response, context) {

    
    });
```



### <a name="create_dedicatedshortcode_updateshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createDedicatedshortcodeUpdateshortcode") createDedicatedshortcodeUpdateshortcode

> Update a dedicated shortcode.


```javascript
function createDedicatedshortcodeUpdateshortcode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid dedicated shortcode to your Ytel account. |
| friendlyName |  ``` Optional ```  | User generated name of the dedicated shortcode. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'Shortcode';
        input['friendlyName'] = 'FriendlyName';
        input['callbackMethod'] = 'CallbackMethod';
        input['callbackUrl'] = 'CallbackUrl';
        input['fallbackMethod'] = 'FallbackMethod';
        input['fallbackUrl'] = 'FallbackUrl';

    controller.createDedicatedshortcodeUpdateshortcode(input, function(error, response, context) {

    
    });
```



### <a name="create_dedicatedshortcode_viewshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createDedicatedshortcodeViewshortcode") createDedicatedshortcodeViewshortcode

> Retrieve a single Short Code object by its shortcode assignment.


```javascript
function createDedicatedshortcodeViewshortcode(shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Dedicated Short Code to your Ytel account |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';

    controller.createDedicatedshortcodeViewshortcode(shortcode, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_viewsms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createShortcodeViewsms") createShortcodeViewsms

> View a single Sms Short Code message.


```javascript
function createShortcodeViewsms(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for the sms resource |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createShortcodeViewsms(messageSid, function(error, response, context) {

    
    });
```



### <a name="create_dedicatedshortcode_getinboundsms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createDedicatedshortcodeGetinboundsms") createDedicatedshortcodeGetinboundsms

> Retrive a list of inbound Sms Short Code messages associated with your Ytel account.


```javascript
function createDedicatedshortcodeGetinboundsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Only list SMS messages sent from this number |
| shortcode |  ``` Optional ```  | Only list SMS messages sent to Shortcode |
| datecreated |  ``` Optional ```  | Only list SMS messages sent in the specified date MAKE REQUEST |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['from'] = 'From';
        input['shortcode'] = 'Shortcode';
        input['datecreated'] = 'Datecreated';

    controller.createDedicatedshortcodeGetinboundsms(input, function(error, response, context) {

    
    });
```



### <a name="create_dedicatedshortcode_sendsms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createDedicatedshortcodeSendsms") createDedicatedshortcodeSendsms

> Send Dedicated Shortcode


```javascript
function createDedicatedshortcodeSendsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | Your dedicated shortcode |
| to |  ``` Required ```  | The number to send your SMS to |
| body |  ``` Required ```  | The body of your message |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent.GET or POST |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 7;
        input['to'] = 7.73365388751666;
        input['body'] = 'body';
        input['method'] = 'method';
        input['messagestatuscallback'] = 'messagestatuscallback';

    controller.createDedicatedshortcodeSendsms(input, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_listsms"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createShortcodeListsms") createShortcodeListsms

> Retrieve a list of Short Code messages.


```javascript
function createShortcodeListsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Optional ```  | Only list messages sent from this Short Code |
| to |  ``` Optional ```  | Only list messages sent to this number |
| dateSent |  ``` Optional ```  | Only list messages sent with the specified date |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'Shortcode';
        input['to'] = 'To';
        input['dateSent'] = 'DateSent';
        input['page'] = 7;
        input['pageSize'] = 7;

    controller.createShortcodeListsms(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="area_mail_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AreaMailController") AreaMailController

### Get singleton instance

The singleton instance of the ``` AreaMailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AreaMailController;
```

### <a name="create_areamail_delete"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreamailDelete") createAreamailDelete

> Remove an AreaMail object by its AreaMailId.


```javascript
function createAreamailDelete(areamailid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |



#### Example Usage

```javascript

    var areamailid = 'areamailid';

    controller.createAreamailDelete(areamailid, function(error, response, context) {

    
    });
```



### <a name="create_areamail_create"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreamailCreate") createAreamailCreate

> Create a new AreaMail object.


```javascript
function createAreamailCreate(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| routes |  ``` Required ```  | List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route.List of routes that AreaMail should be delivered to.  A single route can be either a zipcode or a carrier route. A carrier route is in the form of 92610-C043 where the carrier route is composed of 5 numbers for zipcode, 1 letter for carrier route type, and 3 numbers for carrier route code. Delivery can be sent to mutliple routes by separating them with a commas. Valid Values: 92656, 92610-C043 |
| attachbyid |  ``` Required ```  | Set an existing areamail by attaching its AreamailId. |
| front |  ``` Required ```  | The front of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. Back required |
| back |  ``` Required ```  | The back of the AreaMail item to be created. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| description |  ``` Optional ```  | A string value to use as a description for this AreaMail item. |
| targettype |  ``` Optional ```  | The delivery location type. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript

    var input = [];
        input['routes'] = 'routes';
        input['attachbyid'] = 'attachbyid';
        input['front'] = 'front';
        input['back'] = 'back';
        input['description'] = 'description';
        input['targettype'] = 'targettype';
        input['htmldata'] = 'htmldata';

    controller.createAreamailCreate(input, function(error, response, context) {

    
    });
```



### <a name="create_areamail_view"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreamailView") createAreamailView

> Retrieve an AreaMail object by its AreaMailId.


```javascript
function createAreamailView(areamailid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| areamailid |  ``` Required ```  | The unique identifier for an AreaMail object. |



#### Example Usage

```javascript

    var areamailid = 'areamailid';

    controller.createAreamailView(areamailid, function(error, response, context) {

    
    });
```



### <a name="create_areamail_lists"></a>![Method: ](https://apidocs.io/img/method.png ".AreaMailController.createAreamailLists") createAreamailLists

> Retrieve a list of AreaMail objects.


```javascript
function createAreamailLists(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| areamailsid |  ``` Optional ```  | The unique identifier for an AreaMail object. |
| dateCreated |  ``` Optional ```  | The date the AreaMail was created. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['areamailsid'] = 'areamailsid';
        input['dateCreated'] = 'dateCreated';

    controller.createAreamailLists(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="post_card_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PostCardController") PostCardController

### Get singleton instance

The singleton instance of the ``` PostCardController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PostCardController;
```

### <a name="postcard_deletepostcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.postcardDeletepostcard") postcardDeletepostcard

> Remove a postcard object.


```javascript
function postcardDeletepostcard(postcardid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier of a postcard object. |



#### Example Usage

```javascript

    var postcardid = 'postcardid';

    controller.postcardDeletepostcard(postcardid, function(error, response, context) {

    
    });
```



### <a name="postcard_viewpostcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.postcardViewpostcard") postcardViewpostcard

> Retrieve a postcard object by its PostcardId.


```javascript
function postcardViewpostcard(postcardid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| postcardid |  ``` Required ```  | The unique identifier for a postcard object. |



#### Example Usage

```javascript

    var postcardid = 'postcardid';

    controller.postcardViewpostcard(postcardid, function(error, response, context) {

    
    });
```



### <a name="postcard_listpostcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.postcardListpostcard") postcardListpostcard

> Retrieve a list of postcard objects. The postcards objects are sorted by creation date, with the most recently created postcards appearing first.


```javascript
function postcardListpostcard(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| postcardid |  ``` Optional ```  | The unique identifier for a postcard object. |
| dateCreated |  ``` Optional ```  | The date the postcard was created. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['postcardid'] = 'postcardid';
        input['dateCreated'] = 'dateCreated';

    controller.postcardListpostcard(input, function(error, response, context) {

    
    });
```



### <a name="postcard_createpostcard"></a>![Method: ](https://apidocs.io/img/method.png ".PostCardController.postcardCreatepostcard") postcardCreatepostcard

> Create, print, and mail a postcard to an address. The postcard front must be supplied as a PDF, image, or an HTML string. The back can be a PDF, image, HTML string, or it can be automatically generated by supplying a custom message.


```javascript
function postcardCreatepostcard(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing postcard by attaching its PostcardId. |
| front |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the front of the postcard.  This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. |
| back |  ``` Required ```  | A 4.25"x6.25" or 6.25"x11.25" image to use as the back of the postcard, supplied as a URL, local file, or HTML string.  This allows you to customize your back design, but we will still insert the recipient address for you. |
| message |  ``` Required ```  | The message for the back of the postcard with a maximum of 350 characters. |
| setting |  ``` Required ```  | Code for the dimensions of the media to be printed. |
| description |  ``` Optional ```  | A description for the postcard. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript

    var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['attachbyid'] = 'attachbyid';
        input['front'] = 'front';
        input['back'] = 'back';
        input['message'] = 'message';
        input['setting'] = 'setting';
        input['description'] = 'description';
        input['htmldata'] = 'htmldata';

    controller.postcardCreatepostcard(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="letter_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LetterController") LetterController

### Get singleton instance

The singleton instance of the ``` LetterController ``` class can be accessed from the API Client.

```javascript
var controller = lib.LetterController;
```

### <a name="create_letter_delete"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetterDelete") createLetterDelete

> Remove a letter object by its LetterId.


```javascript
function createLetterDelete(lettersid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |



#### Example Usage

```javascript

    var lettersid = 'lettersid';

    controller.createLetterDelete(lettersid, function(error, response, context) {

    
    });
```



### <a name="create_letter_viewletter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetterViewletter") createLetterViewletter

> Retrieve a letter object by its LetterSid.


```javascript
function createLetterViewletter(lettersid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| lettersid |  ``` Required ```  | The unique identifier for a letter object. |



#### Example Usage

```javascript

    var lettersid = 'lettersid';

    controller.createLetterViewletter(lettersid, function(error, response, context) {

    
    });
```



### <a name="create_letter_listsletter"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetterListsletter") createLetterListsletter

> Retrieve a list of letter objects. The letter objects are sorted by creation date, with the most recently created letters appearing first.


```javascript
function createLetterListsletter(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| lettersid |  ``` Optional ```  | The unique identifier for a letter object. |
| dateCreated |  ``` Optional ```  | The date the letter was created. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['lettersid'] = 'lettersid';
        input['dateCreated'] = 'dateCreated';

    controller.createLetterListsletter(input, function(error, response, context) {

    
    });
```



### <a name="create_letter_create"></a>![Method: ](https://apidocs.io/img/method.png ".LetterController.createLetterCreate") createLetterCreate

> Create, print, and mail a letter to an address. The letter file must be supplied as a PDF or an HTML string.


```javascript
function createLetterCreate(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| from |  ``` Required ```  | The AddressId or an object structured when creating an address by addresses/Create. |
| attachbyid |  ``` Required ```  | Set an existing letter by attaching its LetterId. |
| file |  ``` Required ```  | File can be a 8.5"x11" PDF uploaded file or URL that links to a file. |
| color |  ``` Required ```  | Specify if letter should be printed in color. |
| description |  ``` Optional ```  | A description for the letter. |
| extraservice |  ``` Optional ```  | Add an extra service to your letter. Options are "certified" or "registered". Certified provides tracking and delivery confirmation for domestic destinations and is an additional $5.00. Registered provides tracking and confirmation for international addresses and is an additional $16.50. |
| doublesided |  ``` Optional ```  | Specify if letter should be printed on both sides. |
| template |  ``` Optional ```  | Boolean that defaults to true. When set to false, this specifies that your letter does not follow the m360 address template. In this case, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page. |
| htmldata |  ``` Optional ```  | A string value that contains HTML markup. |



#### Example Usage

```javascript

    var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['attachbyid'] = 'attachbyid';
        input['file'] = 'file';
        input['color'] = 'color';
        input['description'] = 'description';
        input['extraservice'] = 'extraservice';
        input['doublesided'] = 'doublesided';
        input['template'] = 'template';
        input['htmldata'] = 'htmldata';

    controller.createLetterCreate(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="call_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CallController") CallController

### Get singleton instance

The singleton instance of the ``` CallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CallController;
```

### <a name="create_calls_viewcalldetail"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsViewcalldetail") createCallsViewcalldetail

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createCallsViewcalldetail(callSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript

    var callSid = 'callSid';

    controller.createCallsViewcalldetail(callSid, function(error, response, context) {

    
    });
```



### <a name="create_calls_viewcalls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsViewcalls") createCallsViewcalls

> Retrieve a single voice call’s information by its CallSid.


```javascript
function createCallsViewcalls(callsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | The unique identifier for the voice call. |



#### Example Usage

```javascript

    var callsid = 'callsid';

    controller.createCallsViewcalls(callsid, function(error, response, context) {

    
    });
```



### <a name="create_calls_senddigits"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsSenddigits") createCallsSenddigits

> Play Dtmf and send the Digit


```javascript
function createCallsSenddigits(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['playDtmf'] = 'PlayDtmf';
        input['playDtmfDirection'] = Object.keys(PlayDtmfDirection)[0];

    controller.createCallsSenddigits(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_makervm"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsMakervm") createCallsMakervm

> Initiate an outbound Ringless Voicemail through Ytel.


```javascript
function createCallsMakervm(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| rVMCallerId |  ``` Required ```  | A required secondary Caller ID for RVM to work. |
| to |  ``` Required ```  | A valid number (E.164 format) that will receive the phone call. |
| voiceMailURL |  ``` Required ```  | The URL requested once the RVM connects. A set of default parameters will be sent here. |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statsCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |



#### Example Usage

```javascript

    var input = [];
        input['from'] = 'From';
        input['rVMCallerId'] = 'RVMCallerId';
        input['to'] = 'To';
        input['voiceMailURL'] = 'VoiceMailURL';
        input['method'] = 'Method';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statsCallBackMethod'] = 'StatsCallBackMethod';

    controller.createCallsMakervm(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_listcalls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsListcalls") createCallsListcalls

> A list of calls associated with your Ytel account


```javascript
function createCallsListcalls(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Filter calls that were sent to this 10-digit number (E.164 format). |
| from |  ``` Optional ```  | Filter calls that were sent from this 10-digit number (E.164 format). |
| dateCreated |  ``` Optional ```  | Return calls that are from a specified date. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pageSize'] = 7;
        input['to'] = 'To';
        input['from'] = 'From';
        input['dateCreated'] = 'DateCreated';

    controller.createCallsListcalls(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_interruptcalls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsInterruptcalls") createCallsInterruptcalls

> Interrupt the Call by Call Sid


```javascript
function createCallsInterruptcalls(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for voice call that is in progress. |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['url'] = 'Url';
        input['method'] = 'Method';
        input['status'] = Object.keys(Status24)[0];

    controller.createCallsInterruptcalls(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_recordcalls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsRecordcalls") createCallsRecordcalls

> Start or stop recording of an in-progress voice call.


```javascript
function createCallsRecordcalls(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| record |  ``` Required ```  | Set true to initiate recording or false to terminate recording |
| direction |  ``` Optional ```  | The leg of the call to record |
| timeLimit |  ``` Optional ```  | Time in seconds the recording duration should not exceed |
| callBackUrl |  ``` Optional ```  | URL consulted after the recording completes |
| fileformat |  ``` Optional ```  | Format of the recording file. Can be .mp3 or .wav |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['record'] = false;
        input['direction'] = Object.keys(Direction)[0];
        input['timeLimit'] = 7;
        input['callBackUrl'] = 'CallBackUrl';
        input['fileformat'] = Object.keys(Fileformat)[0];

    controller.createCallsRecordcalls(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_playaudios"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsPlayaudios") createCallsPlayaudios

> Play Audio from a url


```javascript
function createCallsPlayaudios(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| sayText |  ``` Required ```  | Valid alphanumeric string that should be played to the In-progress call. |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| mix |  ``` Optional ```  | If false, all other audio will be muted |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['audioUrl'] = 'AudioUrl';
        input['sayText'] = 'SayText';
        input['length'] = 7;
        input['direction'] = Object.keys(Direction)[0];
        input['mix'] = false;

    controller.createCallsPlayaudios(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_voiceeffect"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsVoiceeffect") createCallsVoiceeffect

> Add audio voice effects to the an in-progress voice call.


```javascript
function createCallsVoiceeffect(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier for the in-progress voice call. |
| audioDirection |  ``` Optional ```  | The direction the audio effect should be placed on. If IN, the effects will occur on the incoming audio stream. If OUT, the effects will occur on the outgoing audio stream. |
| pitchSemiTones |  ``` Optional ```  | Set the pitch in semitone (half-step) intervals. Value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | Set the pitch in octave intervals.. Value between -1 and 1 |
| pitch |  ``` Optional ```  | Set the pitch (lowness/highness) of the audio. The higher the value, the higher the pitch. Value greater than 0 |
| rate |  ``` Optional ```  | Set the rate for audio. The lower the value, the lower the rate. value greater than 0 |
| tempo |  ``` Optional ```  | Set the tempo (speed) of the audio. A higher value denotes a faster tempo. Value greater than 0 |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['audioDirection'] = Object.keys(AudioDirection)[0];
        input['pitchSemiTones'] = 7.73365388751666;
        input['pitchOctaves'] = 7.73365388751666;
        input['pitch'] = 7.73365388751666;
        input['rate'] = 7.73365388751666;
        input['tempo'] = 7.73365388751666;

    controller.createCallsVoiceeffect(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_groupcall"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsGroupcall") createCallsGroupcall

> Group Call


```javascript
function createCallsGroupcall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| to |  ``` Required ```  | Please enter multiple E164 number. You can add max 10 numbers. Add numbers separated with comma. e.g : 1111111111,2222222222 |
| url |  ``` Required ```  | URL requested once the call connects |
| groupConfirmKey |  ``` Required ```  | Define the DTMF that the called party should send to bridge the call. Allowed Values : 0-9, #, * |
| groupConfirmFile |  ``` Required ```  | Specify the audio file you want to play when the called party picks up the call |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information. |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) we should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |



#### Example Usage

```javascript

    var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['groupConfirmKey'] = 'GroupConfirmKey';
        input['groupConfirmFile'] = Object.keys(GroupConfirmFile)[0];
        input['method'] = 'Method';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = 'StatusCallBackMethod';
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = 'FallBackMethod';
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = 'HeartBeatMethod';
        input['timeout'] = 7;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = 'HideCallerId';
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = 'RecordCallBackMethod';
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';

    controller.createCallsGroupcall(input, function(error, response, context) {

    
    });
```



### <a name="create_calls_makecall"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createCallsMakecall") createCallsMakecall

> You can experiment with initiating a call through Ytel and view the request response generated when doing so and get the response in json


```javascript
function createCallsMakecall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid Ytel Voice enabled number (E.164 format) that will be initiating the phone call. |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Ytel should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Ytel should handle the receiving numbers voicemail machine |
| ifMachineUrl |  ``` Optional ```  | URL requested when IfMachine=continue |
| ifMachineMethod |  ``` Optional ```  | Method used to request the IfMachineUrl. |
| feedback |  ``` Optional ```  | Specify if survey should be enable or not |
| surveyId |  ``` Optional ```  | The unique identifier for the survey. |



#### Example Usage

```javascript

    var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['method'] = 'Method';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = 'StatusCallBackMethod';
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = 'FallBackMethod';
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = 'HeartBeatMethod';
        input['timeout'] = 7;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = false;
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = 'RecordCallBackMethod';
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';
        input['ifMachine'] = Object.keys(ifMachine)[0];
        input['ifMachineUrl'] = 'IfMachineUrl';
        input['ifMachineMethod'] = 'IfMachineMethod';
        input['feedback'] = false;
        input['surveyId'] = 'SurveyId';

    controller.createCallsMakecall(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneNumberController;
```

### <a name="create_incomingphone_getdidscore"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneGetdidscore") createIncomingphoneGetdidscore

> Get DID Score Number


```javascript
function createIncomingphoneGetdidscore(phonenumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | Specifies the multiple phone numbers for check updated spamscore . |



#### Example Usage

```javascript

    var phonenumber = 'Phonenumber';

    controller.createIncomingphoneGetdidscore(phonenumber, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_bulkbuy"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneBulkbuy") createIncomingphoneBulkbuy

> Purchase a selected number of DID's from specific area codes to be used with your Ytel account.


```javascript
function createIncomingphoneBulkbuy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | The capability the number supports. |
| areaCode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| quantity |  ``` Required ```  | A positive integer that tells how many number you want to buy at a time. |
| leftover |  ``` Optional ```  | If desired quantity is unavailable purchase what is available . |



#### Example Usage

```javascript

    var input = [];
        input['numberType'] = Object.keys(numbertype16)[0];
        input['areaCode'] = 'AreaCode';
        input['quantity'] = 'Quantity';
        input['leftover'] = 'Leftover';

    controller.createIncomingphoneBulkbuy(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_listnumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneListnumber") createIncomingphoneListnumber

> Retrieve a list of purchased phones numbers associated with your Ytel account.


```javascript
function createIncomingphoneListnumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | Which page of the overall response will be returned. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| numberType |  ``` Optional ```  | The capability supported by the number.Number type either SMS,Voice or all |
| friendlyName |  ``` Optional ```  | A human-readable label added to the number object. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pageSize'] = 7;
        input['numberType'] = Object.keys(numbertype16)[0];
        input['friendlyName'] = 'FriendlyName';

    controller.createIncomingphoneListnumber(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_buynumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneBuynumber") createIncomingphoneBuynumber

> Purchase a phone number to be used with your Ytel account


```javascript
function createIncomingphoneBuynumber(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createIncomingphoneBuynumber(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_releasenumber_by_response_type_post"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneReleasenumberByResponseTypePost") createIncomingphoneReleasenumberByResponseTypePost

> Remove a purchased Ytel number from your account.


```javascript
function createIncomingphoneReleasenumberByResponseTypePost(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
| responseType |  ``` Required ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';

    controller.createIncomingphoneReleasenumberByResponseTypePost(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_viewnumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneViewnumber") createIncomingphoneViewnumber

> Retrieve the details for a phone number by its number.


```javascript
function createIncomingphoneViewnumber(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel 10-digit phone number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createIncomingphoneViewnumber(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_transferphonenumbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneTransferphonenumbers") createIncomingphoneTransferphonenumbers

> Transfer phone number that has been purchased for from one account to another account.


```javascript
function createIncomingphoneTransferphonenumbers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | A valid 10-digit Ytel number (E.164 format). |
| fromaccountsid |  ``` Required ```  | A specific Accountsid from where Number is getting transfer. |
| toaccountsid |  ``` Required ```  | A specific Accountsid to which Number is getting transfer. |



#### Example Usage

```javascript

    var input = [];
        input['phonenumber'] = 'phonenumber';
        input['fromaccountsid'] = 'fromaccountsid';
        input['toaccountsid'] = 'toaccountsid';

    controller.createIncomingphoneTransferphonenumbers(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_massreleasenumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneMassreleasenumber") createIncomingphoneMassreleasenumber

> Remove a purchased Ytel number from your account.


```javascript
function createIncomingphoneMassreleasenumber(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel comma separated numbers (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createIncomingphoneMassreleasenumber(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_massupdatenumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneMassupdatenumber") createIncomingphoneMassupdatenumber

> Update properties for a Ytel numbers that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function createIncomingphoneMassupdatenumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid comma(,) separated Ytel numbers. (E.164 format). |
| voiceUrl |  ``` Required ```  | The URL returning InboundXML incoming calls should execute when connected. |
| friendlyName |  ``` Optional ```  | A human-readable value for labeling the number. |
| voiceMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceUrl once incoming call connects. |
| voiceFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML on a call or at initial request of the voice url |
| voiceFallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the VoiceFallbackUrl once incoming call connects. |
| hangupCallback |  ``` Optional ```  | URL that can be requested to receive notification when and how incoming call has ended. |
| hangupCallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HangupCallback URL. |
| heartbeatUrl |  ``` Optional ```  | URL that can be used to monitor the phone number. |
| heartbeatMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the HeartbeatUrl. |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received. |
| smsMethod |  ``` Optional ```  | The HTTP method Ytel will use when requesting the SmsUrl. |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['voiceUrl'] = 'VoiceUrl';
        input['friendlyName'] = 'FriendlyName';
        input['voiceMethod'] = 'VoiceMethod';
        input['voiceFallbackUrl'] = 'VoiceFallbackUrl';
        input['voiceFallbackMethod'] = 'VoiceFallbackMethod';
        input['hangupCallback'] = 'HangupCallback';
        input['hangupCallbackMethod'] = 'HangupCallbackMethod';
        input['heartbeatUrl'] = 'HeartbeatUrl';
        input['heartbeatMethod'] = 'HeartbeatMethod';
        input['smsUrl'] = 'SmsUrl';
        input['smsMethod'] = 'SmsMethod';
        input['smsFallbackUrl'] = 'SmsFallbackUrl';
        input['smsFallbackMethod'] = 'SmsFallbackMethod';

    controller.createIncomingphoneMassupdatenumber(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_updatenumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneUpdatenumber") createIncomingphoneUpdatenumber

> Update properties for a Ytel number that has been purchased for your account. Refer to the parameters list for the list of properties that can be updated.


```javascript
function createIncomingphoneUpdatenumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid Ytel number (E.164 format). |
| voiceUrl |  ``` Required ```  | URL requested once the call connects |
| friendlyName |  ``` Optional ```  | Phone number friendly name description |
| voiceMethod |  ``` Optional ```  | Post or Get |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | Post or Get |
| hangupCallback |  ``` Optional ```  | callback url after a hangup occurs |
| hangupCallbackMethod |  ``` Optional ```  | Post or Get |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | Post or Get |
| smsFallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. |
| smsFallbackMethod |  ``` Optional ```  | The HTTP method Ytel will use when URL requested if the SmsUrl is not available. |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['voiceUrl'] = 'VoiceUrl';
        input['friendlyName'] = 'FriendlyName';
        input['voiceMethod'] = 'VoiceMethod';
        input['voiceFallbackUrl'] = 'VoiceFallbackUrl';
        input['voiceFallbackMethod'] = 'VoiceFallbackMethod';
        input['hangupCallback'] = 'HangupCallback';
        input['hangupCallbackMethod'] = 'HangupCallbackMethod';
        input['heartbeatUrl'] = 'HeartbeatUrl';
        input['heartbeatMethod'] = 'HeartbeatMethod';
        input['smsUrl'] = 'SmsUrl';
        input['smsMethod'] = 'SmsMethod';
        input['smsFallbackUrl'] = 'SmsFallbackUrl';
        input['smsFallbackMethod'] = 'SmsFallbackMethod';

    controller.createIncomingphoneUpdatenumber(input, function(error, response, context) {

    
    });
```



### <a name="create_incomingphone_availablenumber"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createIncomingphoneAvailablenumber") createIncomingphoneAvailablenumber

> Retrieve a list of available phone numbers that can be purchased and used for your Ytel account.


```javascript
function createIncomingphoneAvailablenumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numbertype |  ``` Required ```  | Number type either SMS,Voice or all |
| areacode |  ``` Required ```  | Specifies the area code for the returned list of available numbers. Only available for North American numbers. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return. |



#### Example Usage

```javascript

    var input = [];
        input['numbertype'] = Object.keys(numbertype16)[0];
        input['areacode'] = 'areacode';
        input['pagesize'] = 7;

    controller.createIncomingphoneAvailablenumber(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMSController;
```

### <a name="create_sms_viewdetailsms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSmsViewdetailsms") createSmsViewdetailsms

> Retrieve a single SMS message object with details by its SmsSid.


```javascript
function createSmsViewdetailsms(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createSmsViewdetailsms(messageSid, function(error, response, context) {

    
    });
```



### <a name="create_sms_viewsms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSmsViewsms") createSmsViewsms

> Retrieve a single SMS message object by its SmsSid.


```javascript
function createSmsViewsms(messageSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageSid |  ``` Required ```  | The unique identifier for a sms message. |



#### Example Usage

```javascript

    var messageSid = 'MessageSid';

    controller.createSmsViewsms(messageSid, function(error, response, context) {

    
    });
```



### <a name="create_sms_getinboundsms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSmsGetinboundsms") createSmsGetinboundsms

> Retrieve a list of Inbound SMS message objects.


```javascript
function createSmsGetinboundsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Filter sms message objects by this date. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pageSize'] = 7;
        input['from'] = 'From';
        input['to'] = 'To';
        input['dateSent'] = 'DateSent';

    controller.createSmsGetinboundsms(input, function(error, response, context) {

    
    });
```



### <a name="create_sms_listsms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSmsListsms") createSmsListsms

> Retrieve a list of Outbound SMS message objects.


```javascript
function createSmsListsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Filter SMS message objects from this valid 10-digit phone number (E.164 format). |
| to |  ``` Optional ```  | Filter SMS message objects to this valid 10-digit phone number (E.164 format). |
| dateSent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pageSize'] = 7;
        input['from'] = 'From';
        input['to'] = 'To';
        input['dateSent'] = 'DateSent';

    controller.createSmsListsms(input, function(error, response, context) {

    
    });
```



### <a name="create_sms_sendsms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSmsSendsms") createSmsSendsms

> Send an SMS from a Ytel number


```javascript
function createSmsSendsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | The 10-digit SMS-enabled Ytel number (E.164 format) in which the message is sent. |
| to |  ``` Required ```  | The 10-digit phone number (E.164 format) that will receive the message. |
| body |  ``` Required ```  | The body message that is to be sent in the text. |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| smartsms |  ``` Optional ```  ``` DefaultValue ```  | Check's 'to' number can receive sms or not using Carrier API, if wireless = true then text sms is sent, else wireless = false then call is recieved to end user with audible message. |
| deliveryStatus |  ``` Optional ```  ``` DefaultValue ```  | Delivery reports are a method to tell your system if the message has arrived on the destination phone. |



#### Example Usage

```javascript

    var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['body'] = 'Body';
        input['method'] = 'Method';
        input['messageStatusCallback'] = 'MessageStatusCallback';
        input['smartsms'] = false;
        input['deliveryStatus'] = false;

    controller.createSmsSendsms(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="shared_short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SharedShortCodeController") SharedShortCodeController

### Get singleton instance

The singleton instance of the ``` SharedShortCodeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SharedShortCodeController;
```

### <a name="create_shortcode_viewshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createShortcodeViewshortcode") createShortcodeViewshortcode

> The response returned here contains all resource properties associated with the given Shortcode.


```javascript
function createShortcodeViewshortcode(shortcode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid Shortcode to your Ytel account |



#### Example Usage

```javascript

    var shortcode = 'Shortcode';

    controller.createShortcodeViewshortcode(shortcode, function(error, response, context) {

    
    });
```



### <a name="create_keyword_view"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createKeywordView") createKeywordView

> View a set of properties for a single keyword.


```javascript
function createKeywordView(keywordid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| keywordid |  ``` Required ```  | The unique identifier of each keyword |



#### Example Usage

```javascript

    var keywordid = 'Keywordid';

    controller.createKeywordView(keywordid, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_updateshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createShortcodeUpdateshortcode") createShortcodeUpdateshortcode

> Update Assignment


```javascript
function createShortcodeUpdateshortcode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | List of valid shortcode to your Ytel account |
| friendlyName |  ``` Optional ```  | User generated name of the shortcode |
| callbackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the call is finished. |
| callbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required StatusCallBackUrl once call connects. |
| fallbackUrl |  ``` Optional ```  | URL used if any errors occur during execution of InboundXML or at initial request of the required Url provided with the POST. |
| fallbackUrlMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'Shortcode';
        input['friendlyName'] = 'FriendlyName';
        input['callbackUrl'] = 'CallbackUrl';
        input['callbackMethod'] = 'CallbackMethod';
        input['fallbackUrl'] = 'FallbackUrl';
        input['fallbackUrlMethod'] = 'FallbackUrlMethod';

    controller.createShortcodeUpdateshortcode(input, function(error, response, context) {

    
    });
```



### <a name="create_template_view"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createTemplateView") createTemplateView

> View a Shared ShortCode Template


```javascript
function createTemplateView(templateId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateId |  ``` Required ```  | The unique identifier for a template object |



#### Example Usage

```javascript

    var templateId = uniqid();

    controller.createTemplateView(templateId, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_listshortcode"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createShortcodeListshortcode") createShortcodeListshortcode

> Retrieve a list of shortcode assignment associated with your Ytel account.


```javascript
function createShortcodeListshortcode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['shortcode'] = 'Shortcode';

    controller.createShortcodeListshortcode(input, function(error, response, context) {

    
    });
```



### <a name="create_keyword_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createKeywordLists") createKeywordLists

> Retrieve a list of keywords associated with your Ytel account.


```javascript
function createKeywordLists(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| keyword |  ``` Optional ```  | Only list keywords of keyword |
| shortcode |  ``` Optional ```  | Only list keywords of shortcode |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 7;
        input['keyword'] = 'Keyword';
        input['shortcode'] = 7;

    controller.createKeywordLists(input, function(error, response, context) {

    
    });
```



### <a name="create_template_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createTemplateLists") createTemplateLists

> List Shortcode Templates by Type


```javascript
function createTemplateLists(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  ``` DefaultValue ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| shortcode |  ``` Optional ```  | Only list templates of type |



#### Example Usage

```javascript

    var input = [];
        input['type'] = 'type';
        input['page'] = 7;
        input['pagesize'] = 7;
        input['shortcode'] = 'Shortcode';

    controller.createTemplateLists(input, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_sendsms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createShortcodeSendsms") createShortcodeSendsms

> Send an SMS from a Ytel ShortCode


```javascript
function createShortcodeSendsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| data |  ``` Required ```  | format of your data, example: {companyname}:test,{otpcode}:1234 |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'shortcode';
        input['to'] = 'to';
        input['templateid'] = uniqid();
        input['data'] = 'data';
        input['method'] = 'Method';
        input['messageStatusCallback'] = 'MessageStatusCallback';

    controller.createShortcodeSendsms(input, function(error, response, context) {

    
    });
```



### <a name="create_shortcode_getinboundsms"></a>![Method: ](https://apidocs.io/img/method.png ".SharedShortCodeController.createShortcodeGetinboundsms") createShortcodeGetinboundsms

> List All Inbound ShortCode


```javascript
function createShortcodeGetinboundsms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |
| datecreated |  ``` Optional ```  | Only list messages sent with the specified date |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 7;
        input['pagesize'] = 221;
        input['from'] = 'from';
        input['shortcode'] = 'Shortcode';
        input['datecreated'] = 'Datecreated';

    controller.createShortcodeGetinboundsms(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConferenceController;
```

### <a name="create_conferences_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesPlayAudio") createConferencesPlayAudio

> Play an audio file during a conference.


```javascript
function createConferencesPlayAudio(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |
| audioUrl |  ``` Required ```  | The URL for the audio file that is to be played during the conference. Multiple audio files can be chained by using a semicolon. |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['audioUrl'] = Object.keys(AudioUrl)[0];

    controller.createConferencesPlayAudio(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_hangup_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesHangupParticipant") createConferencesHangupParticipant

> Remove a participant from a conference.


```javascript
function createConferencesHangupParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';

    controller.createConferencesHangupParticipant(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_viewconference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesViewconference") createConferencesViewconference

> Retrieve information about a conference by its ConferenceSid.


```javascript
function createConferencesViewconference(conferenceSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier of each conference resource |



#### Example Usage

```javascript

    var conferenceSid = 'ConferenceSid';

    controller.createConferencesViewconference(conferenceSid, function(error, response, context) {

    
    });
```



### <a name="create_conferences_listconference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesListconference") createConferencesListconference

> Retrieve a list of conference objects.


```javascript
function createConferencesListconference(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| dateCreated |  ``` Optional ```  | Conference created date |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 221;
        input['pagesize'] = 221;
        input['friendlyName'] = 'FriendlyName';
        input['dateCreated'] = 'DateCreated';

    controller.createConferencesListconference(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_list_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesListParticipant") createConferencesListParticipant

> Retrieve a list of participants for an in-progress conference.


```javascript
function createConferencesListParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference. |
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['page'] = 221;
        input['pagesize'] = 221;
        input['muted'] = true;
        input['deaf'] = true;

    controller.createConferencesListParticipant(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesViewParticipant") createConferencesViewParticipant

> Retrieve information about a participant by its ParticipantSid.


```javascript
function createConferencesViewParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantSid |  ``` Required ```  | The unique identifier for a participant object. |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';

    controller.createConferencesViewParticipant(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesAddParticipant") createConferencesAddParticipant

> Add Participant in conference 


```javascript
function createConferencesAddParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | The unique identifier for a conference object. |
| participantNumber |  ``` Required ```  | The phone number of the participant to be added. |
| muted |  ``` Optional ```  | Specifies if participant should be muted. |
| deaf |  ``` Optional ```  | Specifies if the participant should hear audio in the conference. |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantNumber'] = 'ParticipantNumber';
        input['muted'] = true;
        input['deaf'] = true;

    controller.createConferencesAddParticipant(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_create_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesCreateConference") createConferencesCreateConference

> Here you can experiment with initiating a conference call through Ytel and view the request response generated when doing so.


```javascript
function createConferencesCreateConference(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | A valid 10-digit number (E.164 format) that will be initiating the conference call. |
| to |  ``` Required ```  | A valid 10-digit number (E.164 format) that is to receive the conference call. |
| url |  ``` Required ```  | URL requested once the conference connects |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | URL that can be requested to receive notification when call has ended. A set of default parameters will be sent here once the conference is finished. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallbackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallbackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| record |  ``` Optional ```  | Specifies if the conference should be recorded. |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion. |
| recordCallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once conference connects. |
| scheduleTime |  ``` Optional ```  | Schedule conference in future. Schedule time must be greater than current time |
| timeout |  ``` Optional ```  | The number of seconds the call stays on the line while waiting for an answer. The max time limit is 999 and the default limit is 60 seconds but lower times can be set. |



#### Example Usage

```javascript

    var input = [];
        input['from'] = 'From';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['method'] = 'Method';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = 'StatusCallBackMethod';
        input['fallbackUrl'] = 'FallbackUrl';
        input['fallbackMethod'] = 'FallbackMethod';
        input['record'] = true;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = 'RecordCallBackMethod';
        input['scheduleTime'] = 'ScheduleTime';
        input['timeout'] = 221;

    controller.createConferencesCreateConference(input, function(error, response, context) {

    
    });
```



### <a name="create_conferences_deaf_mute_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createConferencesDeafMuteParticipant") createConferencesDeafMuteParticipant

> Deaf Mute Participant


```javascript
function createConferencesDeafMuteParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | ID of the active conference |
| participantSid |  ``` Required ```  | ID of an active participant |
| muted |  ``` Optional ```  | Mute a participant |
| deaf |  ``` Optional ```  | Make it so a participant cant hear |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'conferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['muted'] = true;
        input['deaf'] = true;

    controller.createConferencesDeafMuteParticipant(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CarrierController;
```

### <a name="create_carrier_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookup") createCarrierLookup

> Get the Carrier Lookup


```javascript
function createCarrierLookup(phoneNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | A valid 10-digit number (E.164 format). |



#### Example Usage

```javascript

    var phoneNumber = 'PhoneNumber';

    controller.createCarrierLookup(phoneNumber, function(error, response, context) {

    
    });
```



### <a name="create_carrier_lookuplist"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookuplist") createCarrierLookuplist

> Retrieve a list of carrier lookup objects.


```javascript
function createCarrierLookuplist(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 221;
        input['pageSize'] = 221;

    controller.createCarrierLookuplist(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EmailController;
```

### <a name="create_email_deleteinvalidemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailDeleteinvalidemail") createEmailDeleteinvalidemail

> Remove an email from the invalid email list.


```javascript
function createEmailDeleteinvalidemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the invalid email list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createEmailDeleteinvalidemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_listblockemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailListblockemail") createEmailListblockemail

> Retrieve a list of emails that have been blocked.


```javascript
function createEmailListblockemail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of blocked emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';

    controller.createEmailListblockemail(input, function(error, response, context) {

    
    });
```



### <a name="create_email_listspamemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailListspamemail") createEmailListspamemail

> Retrieve a list of emails that are on the spam list.


```javascript
function createEmailListspamemail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of spam emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';

    controller.createEmailListspamemail(input, function(error, response, context) {

    
    });
```



### <a name="create_email_listbounceemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailListbounceemail") createEmailListbounceemail

> Retrieve a list of emails that have bounced.


```javascript
function createEmailListbounceemail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of bounced emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';

    controller.createEmailListbounceemail(input, function(error, response, context) {

    
    });
```



### <a name="create_email_deletebouncesemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailDeletebouncesemail") createEmailDeletebouncesemail

> Remove an email address from the bounced list.


```javascript
function createEmailDeletebouncesemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the bounced email list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createEmailDeletebouncesemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_listinvalidemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailListinvalidemail") createEmailListinvalidemail

> Retrieve a list of invalid email addresses.


```javascript
function createEmailListinvalidemail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of invalid emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';

    controller.createEmailListinvalidemail(input, function(error, response, context) {

    
    });
```



### <a name="create_email_listunsubscribedemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailListunsubscribedemail") createEmailListunsubscribedemail

> Retrieve a list of email addresses from the unsubscribe list.


```javascript
function createEmailListunsubscribedemail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | The starting point of the list of unsubscribed emails that should be returned. |
| limit |  ``` Optional ```  | The count of results that should be returned. |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'Offset';
        input['limit'] = 'Limit';

    controller.createEmailListunsubscribedemail(input, function(error, response, context) {

    
    });
```



### <a name="create_email_deleteunsubscribedemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailDeleteunsubscribedemail") createEmailDeleteunsubscribedemail

> Remove an email address from the list of unsubscribed emails.


```javascript
function createEmailDeleteunsubscribedemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the unsubscribe list. |



#### Example Usage

```javascript

    var email = 'email';

    controller.createEmailDeleteunsubscribedemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_addunsubscribesemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailAddunsubscribesemail") createEmailAddunsubscribesemail

> Add an email to the unsubscribe list


```javascript
function createEmailAddunsubscribesemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be added to the unsubscribe list |



#### Example Usage

```javascript

    var email = 'email';

    controller.createEmailAddunsubscribesemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_deleteblocksemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailDeleteblocksemail") createEmailDeleteblocksemail

> Remove an email from blocked emails list.


```javascript
function createEmailDeleteblocksemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to be remove from the blocked list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createEmailDeleteblocksemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_deletespamemail"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailDeletespamemail") createEmailDeletespamemail

> Remove an email from the spam email list.


```javascript
function createEmailDeletespamemail(email, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | A valid email address that is to be remove from the spam list. |



#### Example Usage

```javascript

    var email = 'Email';

    controller.createEmailDeletespamemail(email, function(error, response, context) {

    
    });
```



### <a name="create_email_sendemails"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createEmailSendemails") createEmailSendemails

> Create and submit an email message to one or more email addresses.


```javascript
function createEmailSendemails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| type |  ``` Required ```  | Specifies the type of email to be sent |
| subject |  ``` Required ```  | The subject of the mail. Must be a valid string. |
| message |  ``` Required ```  | The email message that is to be sent in the text. |
| from |  ``` Optional ```  | A valid address that will send the email. |
| cc |  ``` Optional ```  | Carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| bcc |  ``` Optional ```  | Blind carbon copy. A valid address that will receive the email. Multiple addresses can be separated by using commas. |
| attachment |  ``` Optional ```  | A file that is attached to the email. Must be less than 7 MB in size. |



#### Example Usage

```javascript

    var input = [];
        input['to'] = 'To';
        input['type'] = Object.keys(Type)[0];
        input['subject'] = 'Subject';
        input['message'] = 'Message';
        input['from'] = 'From';
        input['cc'] = 'Cc';
        input['bcc'] = 'Bcc';
        input['attachment'] = 'Attachment';

    controller.createEmailSendemails(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountController;
```

### <a name="create_accounts_viewaccount"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.createAccountsViewaccount") createAccountsViewaccount

> Retrieve information regarding your Ytel account by a specific date. The response object will contain data such as account status, balance, and account usage totals.


```javascript
function createAccountsViewaccount(date, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | Filter account information based on date. |



#### Example Usage

```javascript

    var date = 'Date';

    controller.createAccountsViewaccount(date, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SubAccountController;
```

### <a name="create_user_subaccountactivation"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createUserSubaccountactivation") createUserSubaccountactivation

> Suspend or unsuspend


```javascript
function createUserSubaccountactivation(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| mActivate |  ``` Required ```  | 0 to suspend or 1 to activate |



#### Example Usage

```javascript

    var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['mActivate'] = Object.keys(mActivate)[0];

    controller.createUserSubaccountactivation(input, function(error, response, context) {

    
    });
```



### <a name="create_user_deletesubaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createUserDeletesubaccount") createUserDeletesubaccount

> Delete sub account or merge numbers into parent


```javascript
function createUserDeletesubaccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  | 0 to delete or 1 to merge numbers to parent account. |



#### Example Usage

```javascript

    var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['mergeNumber'] = Object.keys(MergeNumber)[0];

    controller.createUserDeletesubaccount(input, function(error, response, context) {

    
    });
```



### <a name="create_user_createsubaccount"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createUserCreatesubaccount") createUserCreatesubaccount

> Create a sub user account under the parent account


```javascript
function createUserCreatesubaccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Required ```  | Sub account user first name |
| lastName |  ``` Required ```  | sub account user last name |
| email |  ``` Required ```  | Sub account email address |
| friendlyName |  ``` Required ```  | Descriptive name of the sub account |
| password |  ``` Required ```  | The password of the sub account.  Please make sure to make as password that is at least 8 characters long, contain a symbol, uppercase and a number. |



#### Example Usage

```javascript

    var input = [];
        input['firstName'] = 'FirstName';
        input['lastName'] = 'LastName';
        input['email'] = 'Email';
        input['friendlyName'] = 'FriendlyName';
        input['password'] = 'Password';

    controller.createUserCreatesubaccount(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AddressController") AddressController

### Get singleton instance

The singleton instance of the ``` AddressController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AddressController;
```

### <a name="address_deleteaddress"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.addressDeleteaddress") addressDeleteaddress

> To delete Address to your address book


```javascript
function addressDeleteaddress(addressid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be deleted. |



#### Example Usage

```javascript

    var addressid = 'addressid';

    controller.addressDeleteaddress(addressid, function(error, response, context) {

    
    });
```



### <a name="address_verifyaddress"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.addressVerifyaddress") addressVerifyaddress

> Validates an address given.


```javascript
function addressVerifyaddress(addressid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be verified. |



#### Example Usage

```javascript

    var addressid = 'addressid';

    controller.addressVerifyaddress(addressid, function(error, response, context) {

    
    });
```



### <a name="address_viewaddress"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.addressViewaddress") addressViewaddress

> View Address Specific address Book by providing the address id


```javascript
function addressViewaddress(addressid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressid |  ``` Required ```  | The identifier of the address to be retrieved. |



#### Example Usage

```javascript

    var addressid = 'addressid';

    controller.addressViewaddress(addressid, function(error, response, context) {

    
    });
```



### <a name="address_createaddress"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.addressCreateaddress") addressCreateaddress

> To add an address to your address book, you create a new address object. You can retrieve and delete individual addresses as well as get a list of addresses. Addresses are identified by a unique random ID.


```javascript
function addressCreateaddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of user |
| address |  ``` Required ```  | Address of user. |
| country |  ``` Required ```  | Must be a 2 letter country short-name code (ISO 3166) |
| state |  ``` Required ```  | Must be a 2 letter State eg. CA for US. For Some Countries it can be greater than 2 letters. |
| city |  ``` Required ```  | City Name. |
| zip |  ``` Required ```  | Zip code of city. |
| description |  ``` Optional ```  | Description of addresses. |
| email |  ``` Optional ```  | Email Id of user. |
| phone |  ``` Optional ```  | Phone number of user. |



#### Example Usage

```javascript

    var input = [];
        input['name'] = 'Name';
        input['address'] = 'Address';
        input['country'] = 'Country';
        input['state'] = 'State';
        input['city'] = 'City';
        input['zip'] = 'Zip';
        input['description'] = 'Description';
        input['email'] = 'email';
        input['phone'] = 'Phone';

    controller.addressCreateaddress(input, function(error, response, context) {

    
    });
```



### <a name="address_listaddress"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.addressListaddress") addressListaddress

> List All Address 


```javascript
function addressListaddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressid |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 221;
        input['pagesize'] = 221;
        input['addressid'] = 'addressid';
        input['dateCreated'] = 'dateCreated';

    controller.addressListaddress(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RecordingController;
```

### <a name="create_recording_deleterecording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createRecordingDeleterecording") createRecordingDeleterecording

> Remove a recording from your Ytel account.


```javascript
function createRecordingDeleterecording(recordingsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for a recording. |



#### Example Usage

```javascript

    var recordingsid = 'recordingsid';

    controller.createRecordingDeleterecording(recordingsid, function(error, response, context) {

    
    });
```



### <a name="create_recording_viewrecording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createRecordingViewrecording") createRecordingViewrecording

> Retrieve the recording of a call by its RecordingSid. This resource will return information regarding the call such as start time, end time, duration, and so forth.


```javascript
function createRecordingViewrecording(recordingsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingsid |  ``` Required ```  | The unique identifier for the recording. |



#### Example Usage

```javascript

    var recordingsid = 'recordingsid';

    controller.createRecordingViewrecording(recordingsid, function(error, response, context) {

    
    });
```



### <a name="create_recording_listrecording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createRecordingListrecording") createRecordingListrecording

> Retrieve a list of recording objects.


```javascript
function createRecordingListrecording(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| datecreated |  ``` Optional ```  | Filter results by creation date |
| callsid |  ``` Optional ```  | The unique identifier for a call. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 221;
        input['pagesize'] = 221;
        input['datecreated'] = 'Datecreated';
        input['callsid'] = 'callsid';

    controller.createRecordingListrecording(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TranscriptionController;
```

### <a name="create_transcriptions_audiourltranscription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscriptionsAudiourltranscription") createTranscriptionsAudiourltranscription

> Transcribe an audio recording from a file.


```javascript
function createTranscriptionsAudiourltranscription(audiourl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audiourl |  ``` Required ```  | URL pointing to the location of the audio file that is to be transcribed. |



#### Example Usage

```javascript

    var audiourl = 'audiourl';

    controller.createTranscriptionsAudiourltranscription(audiourl, function(error, response, context) {

    
    });
```



### <a name="create_transcriptions_recordingtranscription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscriptionsRecordingtranscription") createTranscriptionsRecordingtranscription

> Transcribe a recording by its RecordingSid.


```javascript
function createTranscriptionsRecordingtranscription(recordingSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | The unique identifier for a recording object. |



#### Example Usage

```javascript

    var recordingSid = 'recordingSid';

    controller.createTranscriptionsRecordingtranscription(recordingSid, function(error, response, context) {

    
    });
```



### <a name="create_transcriptions_viewtranscription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscriptionsViewtranscription") createTranscriptionsViewtranscription

> Retrieve information about a transaction by its TranscriptionSid.


```javascript
function createTranscriptionsViewtranscription(transcriptionsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionsid |  ``` Required ```  | The unique identifier for a transcription object. |



#### Example Usage

```javascript

    var transcriptionsid = 'transcriptionsid';

    controller.createTranscriptionsViewtranscription(transcriptionsid, function(error, response, context) {

    
    });
```



### <a name="create_transcriptions_listtranscription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createTranscriptionsListtranscription") createTranscriptionsListtranscription

> Retrieve a list of transcription objects for your Ytel account.


```javascript
function createTranscriptionsListtranscription(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| status |  ``` Optional ```  | The state of the transcription. |
| dateTranscribed |  ``` Optional ```  | The date the transcription took place. |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 221;
        input['pagesize'] = 221;
        input['status'] = Object.keys(Status)[0];
        input['dateTranscribed'] = 'dateTranscribed';

    controller.createTranscriptionsListtranscription(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsageController;
```

### <a name="create_usage_listusage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.createUsageListusage") createUsageListusage

> Retrieve usage metrics regarding your Ytel account. The results includes inbound/outbound voice calls and inbound/outbound SMS messages as well as carrier lookup requests.


```javascript
function createUsageListusage(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productCode |  ``` Optional ```  ``` DefaultValue ```  | Filter usage results by product type. |
| startDate |  ``` Optional ```  ``` DefaultValue ```  | Filter usage objects by start date. |
| endDate |  ``` Optional ```  ``` DefaultValue ```  | Filter usage objects by end date. |
| includeSubAccounts |  ``` Optional ```  | Will include all subaccount usage data |



#### Example Usage

```javascript

    var input = [];
        input['productCode'] = Object.keys(ProductCode27)[0];
        input['startDate'] = 'startDate';
        input['endDate'] = 'endDate';
        input['includeSubAccounts'] = 'IncludeSubAccounts';

    controller.createUsageListusage(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



