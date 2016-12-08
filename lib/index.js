/**
  * @module message360
  *  
  * message360 API version 2
  */

var configuration = require('./configuration'),
    Servers = require('./Servers'),
    Environments = require('./Environments'),
    ConferenceController = require('./Controllers/ConferenceController'),
    EmailController = require('./Controllers/EmailController'),
    NumberVerificationController = require('./Controllers/NumberVerificationController'),
    CarrierController = require('./Controllers/CarrierController'),
    CallController = require('./Controllers/CallController'),
    SMSController = require('./Controllers/SMSController'),
    AccountController = require('./Controllers/AccountController'),
    WebRTCController = require('./Controllers/WebRTCController'),
    SubAccountController = require('./Controllers/SubAccountController'),
    AddressController = require('./Controllers/AddressController'),
    PhoneNumberController = require('./Controllers/PhoneNumberController'),
    RecordingController = require('./Controllers/RecordingController'),
    TranscriptionController = require('./Controllers/TranscriptionController'),
    UsageController = require('./Controllers/UsageController'),
    HttpAction = require('./Models/HttpAction'),
    AudioDirection = require('./Models/AudioDirection'),
    IfMachine = require('./Models/IfMachine'),
    AudioFormat = require('./Models/AudioFormat'),
    InterruptedCallStatus = require('./Models/InterruptedCallStatus'),
    Direction = require('./Models/Direction'),
    NumberType = require('./Models/NumberType'),
    Status = require('./Models/Status'),
    SendEmailAs = require('./Models/SendEmailAs'),
    ProductCode = require('./Models/ProductCode'),
    ActivateStatus = require('./Models/ActivateStatus'),
    MergeNumberStatus = require('./Models/MergeNumberStatus');


function initializer () { }

//Main functional components of message360
initializer.configuration = configuration;
initializer.Servers = Servers;
initializer.Environments = Environments;
initializer.ConferenceController = ConferenceController;
initializer.EmailController = EmailController;
initializer.NumberVerificationController = NumberVerificationController;
initializer.CarrierController = CarrierController;
initializer.CallController = CallController;
initializer.SMSController = SMSController;
initializer.AccountController = AccountController;
initializer.WebRTCController = WebRTCController;
initializer.SubAccountController = SubAccountController;
initializer.AddressController = AddressController;
initializer.PhoneNumberController = PhoneNumberController;
initializer.RecordingController = RecordingController;
initializer.TranscriptionController = TranscriptionController;
initializer.UsageController = UsageController;

//Main Models of message360
initializer.HttpAction = HttpAction;
initializer.AudioDirection = AudioDirection;
initializer.IfMachine = IfMachine;
initializer.AudioFormat = AudioFormat;
initializer.InterruptedCallStatus = InterruptedCallStatus;
initializer.Direction = Direction;
initializer.NumberType = NumberType;
initializer.Status = Status;
initializer.SendEmailAs = SendEmailAs;
initializer.ProductCode = ProductCode;
initializer.ActivateStatus = ActivateStatus;
initializer.MergeNumberStatus = MergeNumberStatus;

module.exports = initializer;