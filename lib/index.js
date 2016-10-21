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
    HttpMethod = require('./Models/HttpMethod'),
    AudioDirection = require('./Models/AudioDirection'),
    IfMachine = require('./Models/IfMachine'),
    AudioFormat = require('./Models/AudioFormat'),
    InterruptedCallStatus = require('./Models/InterruptedCallStatus'),
    Direction = require('./Models/Direction'),
    NumberType = require('./Models/NumberType'),
    Status = require('./Models/Status'),
    SendEmailAs = require('./Models/SendEmailAs');


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
initializer.HttpMethod = HttpMethod;
initializer.AudioDirection = AudioDirection;
initializer.IfMachine = IfMachine;
initializer.AudioFormat = AudioFormat;
initializer.InterruptedCallStatus = InterruptedCallStatus;
initializer.Direction = Direction;
initializer.NumberType = NumberType;
initializer.Status = Status;
initializer.SendEmailAs = SendEmailAs;

module.exports = initializer;