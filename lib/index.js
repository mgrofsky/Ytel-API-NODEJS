/**
  * @module YtelAPIV3Lib
  *
  * Ytel API version 3
  */

'use strict';

const Configuration = require('./configuration');
const ShortCodeController = require('./Controllers/ShortCodeController');
const AreaMailController = require('./Controllers/AreaMailController');
const PostCardController = require('./Controllers/PostCardController');
const LetterController = require('./Controllers/LetterController');
const CallController = require('./Controllers/CallController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const SMSController = require('./Controllers/SMSController');
const SharedShortCodeController = require('./Controllers/SharedShortCodeController');
const ConferenceController = require('./Controllers/ConferenceController');
const CarrierController = require('./Controllers/CarrierController');
const EmailController = require('./Controllers/EmailController');
const AccountController = require('./Controllers/AccountController');
const SubAccountController = require('./Controllers/SubAccountController');
const AddressController = require('./Controllers/AddressController');
const RecordingController = require('./Controllers/RecordingController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const UsageController = require('./Controllers/UsageController');
const Errors = require('./Models/Errors');
const GroupConfirmFile44Enum = require('./Models/GroupConfirmFile44Enum');
const AudioUrl43Enum = require('./Models/AudioUrl43Enum');
const Status24Enum = require('./Models/Status24Enum');
const Fileformat37Enum = require('./Models/Fileformat37Enum');
const Type36Enum = require('./Models/Type36Enum');
const AudioFormatEnum = require('./Models/AudioFormatEnum');
const InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum');
const IfMachine32Enum = require('./Models/IfMachine32Enum');
const HttpActionEnum = require('./Models/HttpActionEnum');
const AudioDirection29Enum = require('./Models/AudioDirection29Enum');
const SendEmailAsEnum = require('./Models/SendEmailAsEnum');
const TemplateData = require('./Models/TemplateData');
const GroupConfirmFileEnum = require('./Models/GroupConfirmFileEnum');
const AudioUrlEnum = require('./Models/AudioUrlEnum');
const StatusEnum = require('./Models/StatusEnum');
const FileformatEnum = require('./Models/FileformatEnum');
const IfMachineEnum = require('./Models/IfMachineEnum');
const TypeEnum = require('./Models/TypeEnum');
const NumbertypeEnum = require('./Models/NumbertypeEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const Direction4Enum = require('./Models/Direction4Enum');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const PlayDtmfDirectionEnum = require('./Models/PlayDtmfDirectionEnum');
const MergeNumberEnum = require('./Models/MergeNumberEnum');
const MActivateEnum = require('./Models/MActivateEnum');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const Status12Enum = require('./Models/Status12Enum');
const NumberType14Enum = require('./Models/NumberType14Enum');
const NumberType15Enum = require('./Models/NumberType15Enum');
const MError = require('./Models/MError');
const Message = require('./Models/Message');
const Direction23Enum = require('./Models/Direction23Enum');
const NumberType24Enum = require('./Models/NumberType24Enum');
const Status25Enum = require('./Models/Status25Enum');
const ActivateStatusEnum = require('./Models/ActivateStatusEnum');
const MergeNumberStatusEnum = require('./Models/MergeNumberStatusEnum');
const ProductCode30Enum = require('./Models/ProductCode30Enum');
const Numbertype16Enum = require('./Models/Numbertype16Enum');
const PlayDtmfDirection38Enum = require('./Models/PlayDtmfDirection38Enum');
const MergeNumber40Enum = require('./Models/MergeNumber40Enum');
const ActivateEnum = require('./Models/ActivateEnum');
const ProductCode27Enum = require('./Models/ProductCode27Enum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of YtelAPIV3Lib
    Configuration,
    // controllers of YtelAPIV3Lib
    ShortCodeController,
    AreaMailController,
    PostCardController,
    LetterController,
    CallController,
    PhoneNumberController,
    SMSController,
    SharedShortCodeController,
    ConferenceController,
    CarrierController,
    EmailController,
    AccountController,
    SubAccountController,
    AddressController,
    RecordingController,
    TranscriptionController,
    UsageController,
    // models of YtelAPIV3Lib
    Errors,
    GroupConfirmFile44Enum,
    AudioUrl43Enum,
    Status24Enum,
    Fileformat37Enum,
    Type36Enum,
    AudioFormatEnum,
    InterruptedCallStatusEnum,
    IfMachine32Enum,
    HttpActionEnum,
    AudioDirection29Enum,
    SendEmailAsEnum,
    TemplateData,
    GroupConfirmFileEnum,
    AudioUrlEnum,
    StatusEnum,
    FileformatEnum,
    IfMachineEnum,
    TypeEnum,
    NumbertypeEnum,
    DirectionEnum,
    Direction4Enum,
    AudioDirectionEnum,
    PlayDtmfDirectionEnum,
    MergeNumberEnum,
    MActivateEnum,
    ProductCodeEnum,
    Status12Enum,
    NumberType14Enum,
    NumberType15Enum,
    MError,
    Message,
    Direction23Enum,
    NumberType24Enum,
    Status25Enum,
    ActivateStatusEnum,
    MergeNumberStatusEnum,
    ProductCode30Enum,
    Numbertype16Enum,
    PlayDtmfDirection38Enum,
    MergeNumber40Enum,
    ActivateEnum,
    ProductCode27Enum,
    // exceptions of YtelAPIV3Lib
    APIException,
};

module.exports = initializer;
