/**
  * @module message360
  *
  * message360 API version 3
  */

'use strict';

const Configuration = require('./configuration');
const Servers = require('./Servers');
const Environments = require('./Environments');
const BaseController = require('./Controllers/BaseController');
const ShortCodeController = require('./Controllers/ShortCodeController');
const ConferenceController = require('./Controllers/ConferenceController');
const EmailController = require('./Controllers/EmailController');
const NumberVerificationController = require('./Controllers/NumberVerificationController');
const CarrierController = require('./Controllers/CarrierController');
const CallController = require('./Controllers/CallController');
const WebRTCController = require('./Controllers/WebRTCController');
const SubAccountController = require('./Controllers/SubAccountController');
const AddressController = require('./Controllers/AddressController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const RecordingController = require('./Controllers/RecordingController');
const SMSController = require('./Controllers/SMSController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const UsageController = require('./Controllers/UsageController');
const AccountController = require('./Controllers/AccountController');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const MergeNumberStatusEnum = require('./Models/MergeNumberStatusEnum');
const ActivateStatusEnum = require('./Models/ActivateStatusEnum');
const SendEmailAsEnum = require('./Models/SendEmailAsEnum');
const StatusEnum = require('./Models/StatusEnum');
const NumberTypeEnum = require('./Models/NumberTypeEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum');
const AudioFormatEnum = require('./Models/AudioFormatEnum');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const IfMachineEnum = require('./Models/IfMachineEnum');
const HttpActionEnum = require('./Models/HttpActionEnum');
const APIException = require('./Exceptions/APIException');


const initializer = function initializer() { };

// Main functional components of message360
initializer.Configuration = Configuration;
initializer.Servers = Servers;
initializer.Environments = Environments;
initializer.BaseController = BaseController;
initializer.ShortCodeController = ShortCodeController;
initializer.ConferenceController = ConferenceController;
initializer.EmailController = EmailController;
initializer.NumberVerificationController = NumberVerificationController;
initializer.CarrierController = CarrierController;
initializer.CallController = CallController;
initializer.WebRTCController = WebRTCController;
initializer.SubAccountController = SubAccountController;
initializer.AddressController = AddressController;
initializer.PhoneNumberController = PhoneNumberController;
initializer.RecordingController = RecordingController;
initializer.SMSController = SMSController;
initializer.TranscriptionController = TranscriptionController;
initializer.UsageController = UsageController;
initializer.AccountController = AccountController;

// Main Models of message360
initializer.AudioDirectionEnum = AudioDirectionEnum;
initializer.MergeNumberStatusEnum = MergeNumberStatusEnum;
initializer.ActivateStatusEnum = ActivateStatusEnum;
initializer.SendEmailAsEnum = SendEmailAsEnum;
initializer.StatusEnum = StatusEnum;
initializer.NumberTypeEnum = NumberTypeEnum;
initializer.DirectionEnum = DirectionEnum;
initializer.InterruptedCallStatusEnum = InterruptedCallStatusEnum;
initializer.AudioFormatEnum = AudioFormatEnum;
initializer.ProductCodeEnum = ProductCodeEnum;
initializer.IfMachineEnum = IfMachineEnum;
initializer.HttpActionEnum = HttpActionEnum;

// Main Exceptions of message360
initializer.APIException = APIException;

module.exports = initializer;
