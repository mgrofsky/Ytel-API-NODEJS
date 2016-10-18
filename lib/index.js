/**
  * @module message360
  *  
  * message360 API version 2
  */

var configuration = require('./configuration'),
    ConferenceController = require('./Controllers/ConferenceController'),
    TranscriptionController = require('./Controllers/TranscriptionController'),
    PhoneNumberController = require('./Controllers/PhoneNumberController'),
    UsageController = require('./Controllers/UsageController'),
    EmailController = require('./Controllers/EmailController'),
    SMSController = require('./Controllers/SMSController'),
    AccountController = require('./Controllers/AccountController'),
    RecordingController = require('./Controllers/RecordingController'),
    CallController = require('./Controllers/CallController'),
    CarrierController = require('./Controllers/CarrierController'),
    HttpMethodEnum = require('./Models/HttpMethodEnum'),
    AudioDirectionEnum = require('./Models/AudioDirectionEnum'),
    IfMachineEnum = require('./Models/IfMachineEnum'),
    AudioFormatEnum = require('./Models/AudioFormatEnum'),
    InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum'),
    DirectionEnum = require('./Models/DirectionEnum'),
    NumberTypeEnum = require('./Models/NumberTypeEnum'),
    StatusEnum = require('./Models/StatusEnum');


function initializer(){}

//Main functional components of message360
initializer.configuration = configuration;
initializer.ConferenceController = ConferenceController;
initializer.TranscriptionController = TranscriptionController;
initializer.PhoneNumberController = PhoneNumberController;
initializer.UsageController = UsageController;
initializer.EmailController = EmailController;
initializer.SMSController = SMSController;
initializer.AccountController = AccountController;
initializer.RecordingController = RecordingController;
initializer.CallController = CallController;
initializer.CarrierController = CarrierController;

//Main Models of message360
initializer.HttpMethodEnum = HttpMethodEnum;
initializer.AudioDirectionEnum = AudioDirectionEnum;
initializer.IfMachineEnum = IfMachineEnum;
initializer.AudioFormatEnum = AudioFormatEnum;
initializer.InterruptedCallStatusEnum = InterruptedCallStatusEnum;
initializer.DirectionEnum = DirectionEnum;
initializer.NumberTypeEnum = NumberTypeEnum;
initializer.StatusEnum = StatusEnum;

module.exports = initializer;