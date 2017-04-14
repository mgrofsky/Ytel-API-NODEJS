# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:
* `node --version`
* `npm -version` 
![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Message360-Node)  

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):
* `npm install`
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Message360-Node)
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder. 

Once dependencies are resolved, you will need to move the folder `Message360 ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`
![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.
![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Message360-Node)


### 2. Creating a Test File
Now right click on the folder name and select the `New File` option to create a new test file.    Save it as `index.js` Now import the generated NodeJS library using the following lines of code:
```JavaScript
var lib = require('lib');
```
Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Message360-Node)
![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Message360-Node)

### 3. Running The Test File
To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:  
`node index.js`
![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Message360-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 
###### (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2
###### (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3
###### (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  message360 API V3Controller`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.  

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=message360%20API%20V3Controller)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
var lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [ShortCodeController](#short_code_controller)
* [ConferenceController](#conference_controller)
* [EmailController](#email_controller)
* [NumberVerificationController](#number_verification_controller)
* [CarrierController](#carrier_controller)
* [CallController](#call_controller)
* [WebRTCController](#web_rtc_controller)
* [SubAccountController](#sub_account_controller)
* [AddressController](#address_controller)
* [PhoneNumberController](#phone_number_controller)
* [RecordingController](#recording_controller)
* [SMSController](#sms_controller)
* [TranscriptionController](#transcription_controller)
* [UsageController](#usage_controller)
* [AccountController](#account_controller)

### <a name="short_code_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ShortCodeController") ShortCodeController

#### Get singleton instance

The singleton instance of the ``` ShortCodeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ShortCodeController;
```

#### <a name="create_view_template"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewTemplate") createViewTemplate

> View a Shared ShortCode Template


```javascript
function createViewTemplate(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| templateid |  ``` Required ```  | The unique identifier for a template object |
| responseType |  ``` Required ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['templateid'] = uniqid();
        input['responseType'] = 'ResponseType';

    controller.createViewTemplate(input, function(error, response, context) {

    
	});
```



#### <a name="create_send_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createSendShortCode") createSendShortCode

> Send an SMS from a message360 ShortCode


```javascript
function createSendShortCode(input, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| shortcode |  ``` Required ```  | The Short Code number that is the sender of this message |
| tocountrycode |  ``` Required ```  ``` DefaultValue ```  | The country code for sending this message |
| to |  ``` Required ```  | A valid 10-digit number that should receive the message+ |
| templateid |  ``` Required ```  | The unique identifier for the template used for the message |
| method |  ``` Optional ```  ``` DefaultValue ```  | Specifies the HTTP method used to request the required URL once the Short Code message is sent. |
| messageStatusCallback |  ``` Optional ```  | URL that can be requested to receive notification when Short Code message was sent. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var input = [];
        input['shortcode'] = 'shortcode';
        input['tocountrycode'] = 'tocountrycode';
        input['to'] = 'to';
        input['templateid'] = uniqid();
        input['method'] = 'Method';
        input['messageStatusCallback'] = 'MessageStatusCallback';
        input['responseType'] = 'ResponseType';
    // key-value map for optional form parameters
    var formParams = [];

    controller.createSendShortCode(input, formParams, function(error, response, context) {

    
	});
```



#### <a name="create_list_inbound_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListInboundShortCode") createListInboundShortCode

> List All Inbound ShortCode


```javascript
function createListInboundShortCode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound ShortCode |
| shortcode |  ``` Optional ```  | Only list messages sent to this Short Code |
| dateReceived |  ``` Optional ```  | Only list messages sent with the specified date |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 179;
        input['pagesize'] = 179;
        input['from'] = 'from';
        input['shortcode'] = 'Shortcode';
        input['dateReceived'] = 'DateReceived';
        input['responseType'] = 'ResponseType';

    controller.createListInboundShortCode(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListShortCode") createListShortCode

> List ShortCode Messages


```javascript
function createListShortCode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 179;
        input['pagesize'] = 179;
        input['from'] = 'from';
        input['to'] = 'to';
        input['datesent'] = 'datesent';
        input['responseType'] = 'ResponseType';

    controller.createListShortCode(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_templates"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createListTemplates") createListTemplates

> List Shortcode Templates by Type


```javascript
function createListTemplates(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  ``` DefaultValue ```  | The type (category) of template Valid values: marketing, authorization |
| page |  ``` Optional ```  | The page count to retrieve from the total results in the collection. Page indexing starts at 1. |
| pagesize |  ``` Optional ```  ``` DefaultValue ```  | The count of objects to return per page. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['type'] = 'type';
        input['page'] = 179;
        input['pagesize'] = 179;
        input['responseType'] = 'ResponseType';

    controller.createListTemplates(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_short_code"></a>![Method: ](https://apidocs.io/img/method.png ".ShortCodeController.createViewShortCode") createViewShortCode

> View a ShortCode Message


```javascript
function createViewShortCode(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['messagesid'] = 'messagesid';
        input['responseType'] = 'ResponseType';

    controller.createViewShortCode(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="conference_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConferenceController") ConferenceController

#### Get singleton instance

The singleton instance of the ``` ConferenceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConferenceController;
```

#### <a name="create_deaf_mute_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createDeafMuteParticipant") createDeafMuteParticipant

> Deaf Mute Participant


```javascript
function createDeafMuteParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | TODO: Add a parameter description |
| participantSid |  ``` Required ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'conferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['muted'] = true;
        input['deaf'] = true;
        input['responseType'] = 'ResponseType';

    controller.createDeafMuteParticipant(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListConference") createListConference

> List Conference


```javascript
function createListConference(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| friendlyName |  ``` Optional ```  | Only return conferences with the specified FriendlyName |
| status |  ``` Optional ```  | TODO: Add a parameter description |
| dateCreated |  ``` Optional ```  | TODO: Add a parameter description |
| dateUpdated |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 179;
        input['pageSize'] = 179;
        input['friendlyName'] = 'FriendlyName';
        input['status'] = Object.keys(InterruptedCallStatus)[0];
        input['dateCreated'] = 'DateCreated';
        input['dateUpdated'] = 'DateUpdated';
        input['responseType'] = 'ResponseType';

    controller.createListConference(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_conference"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewConference") createViewConference

> View Conference


```javascript
function createViewConference(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | The unique identifier of each conference resource |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['conferencesid'] = 'conferencesid';
        input['responseType'] = 'ResponseType';

    controller.createViewConference(input, function(error, response, context) {

    
	});
```



#### <a name="add_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.addParticipant") addParticipant

> Add Participant in conference 


```javascript
function addParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferencesid |  ``` Required ```  | Unique Conference Sid |
| participantnumber |  ``` Required ```  | Particiant Number |
| tocountrycode |  ``` Required ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['conferencesid'] = 'conferencesid';
        input['participantnumber'] = 'participantnumber';
        input['tocountrycode'] = 179;
        input['muted'] = true;
        input['deaf'] = true;
        input['responseType'] = 'ResponseType';

    controller.addParticipant(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createListParticipant") createListParticipant

> List Participant


```javascript
function createListParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| page |  ``` Optional ```  | page number |
| pagesize |  ``` Optional ```  | TODO: Add a parameter description |
| muted |  ``` Optional ```  | TODO: Add a parameter description |
| deaf |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response format, xml or json |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['page'] = 179;
        input['pagesize'] = 179;
        input['muted'] = true;
        input['deaf'] = true;
        input['responseType'] = 'ResponseType';

    controller.createListParticipant(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_participant"></a>![Method: ](https://apidocs.io/img/method.png ".ConferenceController.createViewParticipant") createViewParticipant

> View Participant


```javascript
function createViewParticipant(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| conferenceSid |  ``` Required ```  | unique conference sid |
| participantSid |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['conferenceSid'] = 'ConferenceSid';
        input['participantSid'] = 'ParticipantSid';
        input['responseType'] = 'ResponseType';

    controller.createViewParticipant(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="email_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EmailController") EmailController

#### Get singleton instance

The singleton instance of the ``` EmailController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EmailController;
```

#### <a name="create_delete_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteInvalid") createDeleteInvalid

> This endpoint allows you to delete entries in the Invalid Emails list.


```javascript
function createDeleteInvalid(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.createDeleteInvalid(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_blocks"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListBlocks") createListBlocks

> Outputs email addresses on your blocklist


```javascript
function createListBlocks(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| offset |  ``` Optional ```  | Where to start in the output list |
| limit |  ``` Optional ```  | Maximum number of records to return |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['offset'] = 'offset';
        input['limit'] = 'limit';
        input['responseType'] = 'ResponseType';

    controller.createListBlocks(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListSpam") createListSpam

> List out all email addresses marked as spam


```javascript
function createListSpam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record number to start the list at |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript

    var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';

    controller.createListSpam(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListBounces") createListBounces

> List out all email addresses that have bounced


```javascript
function createListBounces(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | The record to start the list at |
| limit |  ``` Optional ```  | The maximum number of records to return |



#### Example Usage

```javascript

    var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';

    controller.createListBounces(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_bounces"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteBounces") createDeleteBounces

> Delete an email address from the bounced address list


```javascript
function createDeleteBounces(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address to remove from the bounce list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.createDeleteBounces(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_invalid"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListInvalid") createListInvalid

> List out all invalid email addresses


```javascript
function createListInvalid(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offet |  ``` Optional ```  | Starting record for listing out emails |
| limit |  ``` Optional ```  | Maximum number of records to return |



#### Example Usage

```javascript

    var input = [];
        input['responseType'] = 'ResponseType';
        input['offet'] = 'offet';
        input['limit'] = 'limit';

    controller.createListInvalid(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createListUnsubscribes") createListUnsubscribes

> List all unsubscribed email addresses


```javascript
function createListUnsubscribes(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |
| offset |  ``` Optional ```  | Starting record of the list |
| limit |  ``` Optional ```  | Maximum number of records to be returned |



#### Example Usage

```javascript

    var input = [];
        input['responseType'] = 'ResponseType';
        input['offset'] = 'offset';
        input['limit'] = 'limit';

    controller.createListUnsubscribes(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteUnsubscribes") createDeleteUnsubscribes

> Delete emails from the unsubscribe list


```javascript
function createDeleteUnsubscribes(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to remove from the unsubscribe list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.createDeleteUnsubscribes(input, function(error, response, context) {

    
	});
```



#### <a name="add_unsubscribes"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.addUnsubscribes") addUnsubscribes

> Add an email to the unsubscribe list


```javascript
function addUnsubscribes(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email to add to the unsubscribe list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.addUnsubscribes(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_block"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteBlock") createDeleteBlock

> Deletes a blocked email


```javascript
function createDeleteBlock(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email address to remove from block list |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.createDeleteBlock(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_spam"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createDeleteSpam") createDeleteSpam

> Deletes a email address marked as spam from the spam list


```javascript
function createDeleteSpam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Email address |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['responseType'] = 'ResponseType';

    controller.createDeleteSpam(input, function(error, response, context) {

    
	});
```



#### <a name="create_send_email"></a>![Method: ](https://apidocs.io/img/method.png ".EmailController.createSendEmail") createSendEmail

> Send out an email


```javascript
function createSendEmail(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | The to email address |
| from |  ``` Required ```  | The from email address |
| type |  ``` Required ```  ``` DefaultValue ```  | email format type, html or text |
| subject |  ``` Required ```  | Email subject |
| message |  ``` Required ```  | The body of the email message |
| cc |  ``` Optional ```  | CC Email address |
| bcc |  ``` Optional ```  | BCC Email address |
| attachment |  ``` Optional ```  | File to be attached.File must be less than 7MB. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['to'] = 'to';
        input['from'] = 'from';
        input['type'] = Object.keys(SendEmailAs)[0];
        input['subject'] = 'subject';
        input['message'] = 'message';
        input['cc'] = 'cc';
        input['bcc'] = 'bcc';
        input['attachment'] = 'attachment';
        input['responseType'] = 'ResponseType';

    controller.createSendEmail(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="number_verification_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NumberVerificationController") NumberVerificationController

#### Get singleton instance

The singleton instance of the ``` NumberVerificationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NumberVerificationController;
```

#### <a name="create_verify_number"></a>![Method: ](https://apidocs.io/img/method.png ".NumberVerificationController.createVerifyNumber") createVerifyNumber

> Number Verification


```javascript
function createVerifyNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | TODO: Add a parameter description |
| type |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['phonenumber'] = 'phonenumber';
        input['type'] = 'type';
        input['responseType'] = 'ResponseType';

    controller.createVerifyNumber(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="carrier_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarrierController") CarrierController

#### Get singleton instance

The singleton instance of the ``` CarrierController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CarrierController;
```

#### <a name="create_carrier_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookup") createCarrierLookup

> Get the Carrier Lookup


```javascript
function createCarrierLookup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phonenumber |  ``` Required ```  | The number to lookup |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phonenumber'] = 'phonenumber';
        input['responseType'] = 'ResponseType';

    controller.createCarrierLookup(input, function(error, response, context) {

    
	});
```



#### <a name="create_carrier_lookup_list"></a>![Method: ](https://apidocs.io/img/method.png ".CarrierController.createCarrierLookupList") createCarrierLookupList

> Get the All Purchase Number's Carrier lookup


```javascript
function createCarrierLookupList(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page Number |
| pagesize |  ``` Optional ```  | Page Size |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pagesize'] = 15;
        input['responseType'] = 'ResponseType';

    controller.createCarrierLookupList(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="call_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CallController") CallController

#### Get singleton instance

The singleton instance of the ``` CallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CallController;
```

#### <a name="create_view_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createViewCall") createViewCall

> View Call Response


```javascript
function createViewCall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callsid |  ``` Required ```  | Call Sid id for particular Call |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callsid'] = 'callsid';
        input['responseType'] = 'ResponseType';

    controller.createViewCall(input, function(error, response, context) {

    
	});
```



#### <a name="create_group_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createGroupCall") createGroupCall

> Group Call


```javascript
function createGroupCall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromCountryCode |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| from |  ``` Required ```  | TODO: Add a parameter description |
| toCountryCode |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| to |  ``` Required ```  | TODO: Add a parameter description |
| url |  ``` Required ```  | TODO: Add a parameter description |
| method |  ``` Optional ```  | TODO: Add a parameter description |
| statusCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| statusCallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| fallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| fallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| heartBeatUrl |  ``` Optional ```  | TODO: Add a parameter description |
| heartBeatMethod |  ``` Optional ```  | TODO: Add a parameter description |
| timeout |  ``` Optional ```  | TODO: Add a parameter description |
| playDtmf |  ``` Optional ```  | TODO: Add a parameter description |
| hideCallerId |  ``` Optional ```  | TODO: Add a parameter description |
| record |  ``` Optional ```  | TODO: Add a parameter description |
| recordCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| recordCallBackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| transcribe |  ``` Optional ```  | TODO: Add a parameter description |
| transcribeCallBackUrl |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['fromCountryCode'] = 'FromCountryCode';
        input['from'] = 'From';
        input['toCountryCode'] = 'ToCountryCode';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['method'] = Object.keys(HttpAction)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpAction)[0];
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = Object.keys(HttpAction)[0];
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = Object.keys(HttpAction)[0];
        input['timeout'] = 15;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = 'HideCallerId';
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpAction)[0];
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';
        input['responseType'] = 'ResponseType';

    controller.createGroupCall(input, function(error, response, context) {

    
	});
```



#### <a name="create_voice_effect"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createVoiceEffect") createVoiceEffect

> Voice Effect


```javascript
function createVoiceEffect(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | TODO: Add a parameter description |
| audioDirection |  ``` Optional ```  | TODO: Add a parameter description |
| pitchSemiTones |  ``` Optional ```  | value between -14 and 14 |
| pitchOctaves |  ``` Optional ```  | value between -1 and 1 |
| pitch |  ``` Optional ```  | value greater than 0 |
| rate |  ``` Optional ```  | value greater than 0 |
| tempo |  ``` Optional ```  | value greater than 0 |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['audioDirection'] = Object.keys(AudioDirection)[0];
        input['pitchSemiTones'] = 15.5642606413757;
        input['pitchOctaves'] = 15.5642606413757;
        input['pitch'] = 15.5642606413757;
        input['rate'] = 15.5642606413757;
        input['tempo'] = 15.5642606413757;
        input['responseType'] = 'ResponseType';

    controller.createVoiceEffect(input, function(error, response, context) {

    
	});
```



#### <a name="create_record_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createRecordCall") createRecordCall

> Record a Call


```javascript
function createRecordCall(input, callback)
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
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response format, xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['record'] = false;
        input['direction'] = Object.keys(Direction)[0];
        input['timeLimit'] = 15;
        input['callBackUrl'] = 'CallBackUrl';
        input['fileformat'] = Object.keys(AudioFormat)[0];
        input['responseType'] = 'ResponseType';

    controller.createRecordCall(input, function(error, response, context) {

    
	});
```



#### <a name="create_play_audio"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createPlayAudio") createPlayAudio

> Play Dtmf and send the Digit


```javascript
function createPlayAudio(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| audioUrl |  ``` Required ```  | URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav |
| length |  ``` Optional ```  | Time limit in seconds for audio play back |
| direction |  ``` Optional ```  | The leg of the call audio will be played to |
| loop |  ``` Optional ```  | Repeat audio playback indefinitely |
| mix |  ``` Optional ```  | If false, all other audio will be muted |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['audioUrl'] = 'AudioUrl';
        input['length'] = 15;
        input['direction'] = Object.keys(Direction)[0];
        input['loop'] = false;
        input['mix'] = false;
        input['responseType'] = 'ResponseType';

    controller.createPlayAudio(input, function(error, response, context) {

    
	});
```



#### <a name="create_interrupted_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createInterruptedCall") createInterruptedCall

> Interrupt the Call by Call Sid


```javascript
function createInterruptedCall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | Call SId |
| url |  ``` Optional ```  | URL the in-progress call will be redirected to |
| method |  ``` Optional ```  | The method used to request the above Url parameter |
| status |  ``` Optional ```  | Status to set the in-progress call to |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['url'] = 'Url';
        input['method'] = Object.keys(HttpAction)[0];
        input['status'] = Object.keys(InterruptedCallStatus)[0];
        input['responseType'] = 'ResponseType';

    controller.createInterruptedCall(input, function(error, response, context) {

    
	});
```



#### <a name="create_send_digit"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createSendDigit") createSendDigit

> Play Dtmf and send the Digit


```javascript
function createSendDigit(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| callSid |  ``` Required ```  | The unique identifier of each call resource |
| playDtmf |  ``` Required ```  | DTMF digits to play to the call. 0-9, #, *, W, or w |
| playDtmfDirection |  ``` Optional ```  | The leg of the call DTMF digits should be sent to |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['callSid'] = 'CallSid';
        input['playDtmf'] = 'PlayDtmf';
        input['playDtmfDirection'] = Object.keys(Direction)[0];
        input['responseType'] = 'ResponseType';

    controller.createSendDigit(input, function(error, response, context) {

    
	});
```



#### <a name="create_make_call"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createMakeCall") createMakeCall

> You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json


```javascript
function createMakeCall(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromCountryCode |  ``` Required ```  | from country code |
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| toCountryCode |  ``` Required ```  | To cuntry code number |
| to |  ``` Required ```  | To number |
| url |  ``` Required ```  | URL requested once the call connects |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once call connects. |
| statusCallBackUrl |  ``` Optional ```  | specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| statusCallBackMethod |  ``` Optional ```  | Specifies the HTTP methodlinkclass used to request StatusCallbackUrl. |
| fallBackUrl |  ``` Optional ```  | URL requested if the initial Url parameter fails or encounters an error |
| fallBackMethod |  ``` Optional ```  | Specifies the HTTP method used to request the required FallbackUrl once call connects. |
| heartBeatUrl |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed tim |
| heartBeatMethod |  ``` Optional ```  | Specifies the HTTP method used to request HeartbeatUrl. |
| timeout |  ``` Optional ```  | Time (in seconds) Message360 should wait while the call is ringing before canceling the call |
| playDtmf |  ``` Optional ```  | DTMF Digits to play to the call once it connects. 0-9, #, or * |
| hideCallerId |  ``` Optional ```  | Specifies if the caller id will be hidden |
| record |  ``` Optional ```  | Specifies if the call should be recorded |
| recordCallBackUrl |  ``` Optional ```  | Recording parameters will be sent here upon completion |
| recordCallBackMethod |  ``` Optional ```  | Method used to request the RecordCallback URL. |
| transcribe |  ``` Optional ```  | Specifies if the call recording should be transcribed |
| transcribeCallBackUrl |  ``` Optional ```  | Transcription parameters will be sent here upon completion |
| ifMachine |  ``` Optional ```  | How Message360 should handle the receiving numbers voicemail machine |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['fromCountryCode'] = 'FromCountryCode';
        input['from'] = 'From';
        input['toCountryCode'] = 'ToCountryCode';
        input['to'] = 'To';
        input['url'] = 'Url';
        input['method'] = Object.keys(HttpAction)[0];
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statusCallBackMethod'] = Object.keys(HttpAction)[0];
        input['fallBackUrl'] = 'FallBackUrl';
        input['fallBackMethod'] = Object.keys(HttpAction)[0];
        input['heartBeatUrl'] = 'HeartBeatUrl';
        input['heartBeatMethod'] = false;
        input['timeout'] = 15;
        input['playDtmf'] = 'PlayDtmf';
        input['hideCallerId'] = false;
        input['record'] = false;
        input['recordCallBackUrl'] = 'RecordCallBackUrl';
        input['recordCallBackMethod'] = Object.keys(HttpAction)[0];
        input['transcribe'] = false;
        input['transcribeCallBackUrl'] = 'TranscribeCallBackUrl';
        input['ifMachine'] = Object.keys(ifMachine)[0];
        input['responseType'] = 'ResponseType';

    controller.createMakeCall(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_calls"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createListCalls") createListCalls

> A list of calls associated with your Message360 account


```javascript
function createListCalls(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| to |  ``` Optional ```  | Only list calls to this number |
| from |  ``` Optional ```  | Only list calls from this number |
| dateCreated |  ``` Optional ```  | Only list calls starting within the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pageSize'] = 15;
        input['to'] = 'To';
        input['from'] = 'From';
        input['dateCreated'] = 'DateCreated';
        input['responseType'] = 'ResponseType';

    controller.createListCalls(input, function(error, response, context) {

    
	});
```



#### <a name="create_send_ringless_vm"></a>![Method: ](https://apidocs.io/img/method.png ".CallController.createSendRinglessVM") createSendRinglessVM

> API endpoint used to send a Ringless Voicemail


```javascript
function createSendRinglessVM(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromCountryCode |  ``` Required ```  | From country code |
| from |  ``` Required ```  | This number to display on Caller ID as calling |
| toCountryCode |  ``` Required ```  | To country code |
| to |  ``` Required ```  | To number |
| voiceMailURL |  ``` Required ```  | URL to an audio file |
| method |  ``` Required ```  ``` DefaultValue ```  | Not currently used in this version |
| statusCallBackUrl |  ``` Optional ```  | URL to post the status of the Ringless request |
| statsCallBackMethod |  ``` Optional ```  | POST or GET |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['fromCountryCode'] = 'FromCountryCode';
        input['from'] = 'From';
        input['toCountryCode'] = 'ToCountryCode';
        input['to'] = 'To';
        input['voiceMailURL'] = 'VoiceMailURL';
        input['method'] = 'Method';
        input['statusCallBackUrl'] = 'StatusCallBackUrl';
        input['statsCallBackMethod'] = 'StatsCallBackMethod';
        input['responseType'] = 'ResponseType';

    controller.createSendRinglessVM(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="web_rtc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebRTCController") WebRTCController

#### Get singleton instance

The singleton instance of the ``` WebRTCController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WebRTCController;
```

#### <a name="create_check_funds"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createCheckFunds") createCheckFunds

> TODO: Add a method description


```javascript
function createCheckFunds(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your message360 Account SID |
| authToken |  ``` Required ```  | Your message360 Token |



#### Example Usage

```javascript

    var input = [];
        input['accountSid'] = account_sid;
        input['authToken'] = auth_token;

    controller.createCheckFunds(input, function(error, response, context) {

    
	});
```



#### <a name="create_token"></a>![Method: ](https://apidocs.io/img/method.png ".WebRTCController.createToken") createToken

> message360 webrtc


```javascript
function createToken(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSid |  ``` Required ```  | Your message360 Account SID |
| authToken |  ``` Required ```  | Your message360 Token |
| username |  ``` Required ```  | WebRTC username authentication |
| password |  ``` Required ```  | WebRTC password authentication |



#### Example Usage

```javascript

    var input = [];
        input['accountSid'] = account_sid;
        input['authToken'] = auth_token;
        input['username'] = 'username';
        input['password'] = 'password';

    controller.createToken(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="sub_account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubAccountController") SubAccountController

#### Get singleton instance

The singleton instance of the ``` SubAccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SubAccountController;
```

#### <a name="create_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSubAccount") createSubAccount

> Create a sub user account under the parent account


```javascript
function createSubAccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Required ```  | Sub account user first name |
| lastName |  ``` Required ```  | sub account user last name |
| email |  ``` Required ```  | Sub account email address |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['firstName'] = 'FirstName';
        input['lastName'] = 'LastName';
        input['email'] = 'Email';
        input['responseType'] = 'ResponseType';

    controller.createSubAccount(input, function(error, response, context) {

    
	});
```



#### <a name="create_suspend_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createSuspendSubAccount") createSuspendSubAccount

> Suspend or unsuspend


```javascript
function createSuspendSubAccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be activated or suspended |
| activate |  ``` Required ```  ``` DefaultValue ```  | 0 to suspend or 1 to activate |
| responseType |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['activate'] = Object.keys(ActivateStatus)[0];
        input['responseType'] = 'ResponseType';

    controller.createSuspendSubAccount(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_sub_account"></a>![Method: ](https://apidocs.io/img/method.png ".SubAccountController.createDeleteSubAccount") createDeleteSubAccount

> Delete sub account or merge numbers into parent


```javascript
function createDeleteSubAccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subAccountSID |  ``` Required ```  | The SubaccountSid to be deleted |
| mergeNumber |  ``` Required ```  ``` DefaultValue ```  | 0 to delete or 1 to merge numbers to parent account. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['subAccountSID'] = 'SubAccountSID';
        input['mergeNumber'] = Object.keys(MergeNumberStatus)[0];
        input['responseType'] = 'ResponseType';

    controller.createDeleteSubAccount(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="address_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AddressController") AddressController

#### Get singleton instance

The singleton instance of the ``` AddressController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AddressController;
```

#### <a name="create_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createAddress") createAddress

> To add an address to your address book, you create a new address object. You can retrieve and delete individual addresses as well as get a list of addresses. Addresses are identified by a unique random ID.


```javascript
function createAddress(input, callback)
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
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



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
        input['responseType'] = 'ResponseType';

    controller.createAddress(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createDeleteAddress") createDeleteAddress

> To delete Address to your address book


```javascript
function createDeleteAddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be deleted. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';

    controller.createDeleteAddress(input, function(error, response, context) {

    
	});
```



#### <a name="create_verify_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createVerifyAddress") createVerifyAddress

> Validates an address given.


```javascript
function createVerifyAddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be verified. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';

    controller.createVerifyAddress(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createListAddress") createListAddress

> List All Address 


```javascript
function createListAddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | Return requested # of items starting the value, default=0, must be an integer |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | How many results to return, default is 10, max is 100, must be an integer |
| addressSID |  ``` Optional ```  | addresses Sid |
| dateCreated |  ``` Optional ```  | date created address. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pageSize'] = 15;
        input['addressSID'] = 'AddressSID';
        input['dateCreated'] = 'DateCreated';
        input['responseType'] = 'ResponseType';

    controller.createListAddress(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_address"></a>![Method: ](https://apidocs.io/img/method.png ".AddressController.createViewAddress") createViewAddress

> View Address Specific address Book by providing the address id


```javascript
function createViewAddress(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| addressSID |  ``` Required ```  | The identifier of the address to be retrieved. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response Type either json or xml |



#### Example Usage

```javascript

    var input = [];
        input['addressSID'] = 'AddressSID';
        input['responseType'] = 'ResponseType';

    controller.createViewAddress(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="phone_number_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumberController") PhoneNumberController

#### Get singleton instance

The singleton instance of the ``` PhoneNumberController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneNumberController;
```

#### <a name="update_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.updatePhoneNumber") updatePhoneNumber

> Update Phone Number Details


```javascript
function updatePhoneNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | TODO: Add a parameter description |
| friendlyName |  ``` Optional ```  | TODO: Add a parameter description |
| voiceUrl |  ``` Optional ```  | URL requested once the call connects |
| voiceMethod |  ``` Optional ```  | TODO: Add a parameter description |
| voiceFallbackUrl |  ``` Optional ```  | URL requested if the voice URL is not available |
| voiceFallbackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| hangupCallback |  ``` Optional ```  | TODO: Add a parameter description |
| hangupCallbackMethod |  ``` Optional ```  | TODO: Add a parameter description |
| heartbeatUrl |  ``` Optional ```  | URL requested once the call connects |
| heartbeatMethod |  ``` Optional ```  | URL that can be requested every 60 seconds during the call to notify of elapsed time |
| smsUrl |  ``` Optional ```  | URL requested when an SMS is received |
| smsMethod |  ``` Optional ```  | TODO: Add a parameter description |
| smsFallbackUrl |  ``` Optional ```  | URL requested once the call connects |
| smsFallbackMethod |  ``` Optional ```  | URL requested if the sms URL is not available |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['friendlyName'] = 'FriendlyName';
        input['voiceUrl'] = 'VoiceUrl';
        input['voiceMethod'] = Object.keys(HttpAction)[0];
        input['voiceFallbackUrl'] = 'VoiceFallbackUrl';
        input['voiceFallbackMethod'] = Object.keys(HttpAction)[0];
        input['hangupCallback'] = 'HangupCallback';
        input['hangupCallbackMethod'] = Object.keys(HttpAction)[0];
        input['heartbeatUrl'] = 'HeartbeatUrl';
        input['heartbeatMethod'] = Object.keys(HttpAction)[0];
        input['smsUrl'] = 'SmsUrl';
        input['smsMethod'] = Object.keys(HttpAction)[0];
        input['smsFallbackUrl'] = 'SmsFallbackUrl';
        input['smsFallbackMethod'] = Object.keys(HttpAction)[0];
        input['responseType'] = 'ResponseType';

    controller.updatePhoneNumber(input, function(error, response, context) {

    
	});
```



#### <a name="create_buy_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createBuyNumber") createBuyNumber

> Buy Phone Number 


```javascript
function createBuyNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be purchase |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';

    controller.createBuyNumber(input, function(error, response, context) {

    
	});
```



#### <a name="create_release_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createReleaseNumber") createReleaseNumber

> Release number from account


```javascript
function createReleaseNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Phone number to be relase |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';

    controller.createReleaseNumber(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_number_details"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createViewNumberDetails") createViewNumberDetails

> Get Phone Number Details


```javascript
function createViewNumberDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phoneNumber |  ``` Required ```  | Get Phone number Detail |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['phoneNumber'] = 'PhoneNumber';
        input['responseType'] = 'ResponseType';

    controller.createViewNumberDetails(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createListNumber") createListNumber

> List Account's Phone number details


```javascript
function createListNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Number of individual resources listed in the response per page |
| numberType |  ``` Optional ```  | TODO: Add a parameter description |
| friendlyName |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pageSize'] = 15;
        input['numberType'] = Object.keys(Number Type)[0];
        input['friendlyName'] = 'FriendlyName';
        input['responseType'] = 'ResponseType';

    controller.createListNumber(input, function(error, response, context) {

    
	});
```



#### <a name="create_available_phone_number"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumberController.createAvailablePhoneNumber") createAvailablePhoneNumber

> Available Phone Number


```javascript
function createAvailablePhoneNumber(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| numberType |  ``` Required ```  | Number type either SMS,Voice or all |
| areaCode |  ``` Required ```  | Phone Number Area Code |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Page Size |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['numberType'] = Object.keys(Number Type)[0];
        input['areaCode'] = 'AreaCode';
        input['pageSize'] = 15;
        input['responseType'] = 'ResponseType';

    controller.createAvailablePhoneNumber(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="recording_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecordingController") RecordingController

#### Get singleton instance

The singleton instance of the ``` RecordingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RecordingController;
```

#### <a name="create_list_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createListRecording") createListRecording

> List out Recordings


```javascript
function createListRecording(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pageSize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| dateCreated |  ``` Optional ```  | TODO: Add a parameter description |
| callSid |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pageSize'] = 15;
        input['dateCreated'] = 'DateCreated';
        input['callSid'] = 'CallSid';
        input['responseType'] = 'ResponseType';

    controller.createListRecording(input, function(error, response, context) {

    
	});
```



#### <a name="create_delete_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createDeleteRecording") createDeleteRecording

> Delete Recording Record


```javascript
function createDeleteRecording(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording Sid to be delete |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';

    controller.createDeleteRecording(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_recording"></a>![Method: ](https://apidocs.io/img/method.png ".RecordingController.createViewRecording") createViewRecording

> View a specific Recording


```javascript
function createViewRecording(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Search Recording sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';

    controller.createViewRecording(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

#### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMSController;
```

#### <a name="create_list_inbound_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListInboundSMS") createListInboundSMS

> List All Inbound SMS


```javascript
function createListInboundSMS(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | From Number to Inbound SMS |
| to |  ``` Optional ```  | To Number to get Inbound SMS |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pagesize'] = 'pagesize';
        input['from'] = 'from';
        input['to'] = 'to';
        input['responseType'] = 'ResponseType';

    controller.createListInboundSMS(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createListSMS") createListSMS

> List All SMS


```javascript
function createListSMS(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Which page of the overall response will be returned. Zero indexed |
| pagesize |  ``` Optional ```  | Number of individual resources listed in the response per page |
| from |  ``` Optional ```  | Messages sent from this number |
| to |  ``` Optional ```  | Messages sent to this number |
| datesent |  ``` Optional ```  | Only list SMS messages sent in the specified date range |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pagesize'] = 15;
        input['from'] = 'from';
        input['to'] = 'to';
        input['datesent'] = 'datesent';
        input['responseType'] = 'ResponseType';

    controller.createListSMS(input, function(error, response, context) {

    
	});
```



#### <a name="create_send_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSendSMS") createSendSMS

> Send an SMS from a message360 number


```javascript
function createSendSMS(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromcountrycode |  ``` Required ```  ``` DefaultValue ```  | From Country Code |
| from |  ``` Required ```  | SMS enabled Message360 number to send this message from |
| tocountrycode |  ``` Required ```  ``` DefaultValue ```  | To country code |
| to |  ``` Required ```  | Number to send the SMS to |
| body |  ``` Required ```  | Text Message To Send |
| method |  ``` Optional ```  | Specifies the HTTP method used to request the required URL once SMS sent. |
| messagestatuscallback |  ``` Optional ```  | URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished. |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['fromcountrycode'] = 15;
        input['from'] = 'from';
        input['tocountrycode'] = 15;
        input['to'] = 'to';
        input['body'] = 'body';
        input['method'] = Object.keys(HttpAction)[0];
        input['messagestatuscallback'] = 'messagestatuscallback';
        input['responseType'] = 'ResponseType';

    controller.createSendSMS(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createViewSMS") createViewSMS

> View a Particular SMS


```javascript
function createViewSMS(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messagesid |  ``` Required ```  | Message sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['messagesid'] = 'messagesid';
        input['responseType'] = 'ResponseType';

    controller.createViewSMS(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="transcription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TranscriptionController") TranscriptionController

#### Get singleton instance

The singleton instance of the ``` TranscriptionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TranscriptionController;
```

#### <a name="create_audio_url_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createAudioURLTranscription") createAudioURLTranscription

> Audio URL Transcriptions


```javascript
function createAudioURLTranscription(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| audioUrl |  ``` Required ```  | Audio url |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['audioUrl'] = 'AudioUrl';
        input['responseType'] = 'ResponseType';

    controller.createAudioURLTranscription(input, function(error, response, context) {

    
	});
```



#### <a name="create_recording_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createRecordingTranscription") createRecordingTranscription

> Recording Transcriptions


```javascript
function createRecordingTranscription(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| recordingSid |  ``` Required ```  | Unique Recording sid |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['recordingSid'] = 'RecordingSid';
        input['responseType'] = 'ResponseType';

    controller.createRecordingTranscription(input, function(error, response, context) {

    
	});
```



#### <a name="create_view_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createViewTranscription") createViewTranscription

> View Specific Transcriptions


```javascript
function createViewTranscription(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transcriptionSid |  ``` Required ```  | Unique Transcription ID |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['transcriptionSid'] = 'TranscriptionSid';
        input['responseType'] = 'ResponseType';

    controller.createViewTranscription(input, function(error, response, context) {

    
	});
```



#### <a name="create_list_transcription"></a>![Method: ](https://apidocs.io/img/method.png ".TranscriptionController.createListTranscription") createListTranscription

> Get All transcriptions


```javascript
function createListTranscription(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | TODO: Add a parameter description |
| pageSize |  ``` Optional ```  | TODO: Add a parameter description |
| status |  ``` Optional ```  | TODO: Add a parameter description |
| dateTranscribed |  ``` Optional ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['page'] = 15;
        input['pageSize'] = 15;
        input['status'] = Object.keys(Status)[0];
        input['dateTranscribed'] = 'DateTranscribed';
        input['responseType'] = 'ResponseType';

    controller.createListTranscription(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsageController") UsageController

#### Get singleton instance

The singleton instance of the ``` UsageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsageController;
```

#### <a name="create_list_usage"></a>![Method: ](https://apidocs.io/img/method.png ".UsageController.createListUsage") createListUsage

> Get all usage 


```javascript
function createListUsage(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productCode |  ``` Required ```  ``` DefaultValue ```  | Product Code |
| startDate |  ``` Required ```  ``` DefaultValue ```  | Start Usage Date |
| endDate |  ``` Required ```  ``` DefaultValue ```  | End Usage Date |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['productCode'] = Object.keys(Product Code)[0];
        input['startDate'] = 'startDate';
        input['endDate'] = 'endDate';
        input['responseType'] = 'ResponseType';

    controller.createListUsage(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

#### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountController;
```

#### <a name="create_view_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.createViewAccount") createViewAccount

> Display Account Description


```javascript
function createViewAccount(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| date |  ``` Required ```  | TODO: Add a parameter description |
| responseType |  ``` Optional ```  ``` DefaultValue ```  | Response type format xml or json |



#### Example Usage

```javascript

    var input = [];
        input['date'] = 'Date';
        input['responseType'] = 'ResponseType';

    controller.createViewAccount(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)



