const { Schema, model } = require('mongoose');

const organizationContacts = new Schema({
  mailAddress: { type: String },
  factAddress: { type: String, unique: true },
  phone: { type: String },
  email: { type: String },
});

const subscriptionInfo = new Schema({
  subscriptionId: { type: Number, required: true, unique: true },
  subscriptionTime: { type: Number, required: true },
});

const organizationType = new Schema({
  name: { type: String, require: true },
});

const legalFaceInfo = new Schema({
  name: { type: String, required: true },
  fullName: { type: String, require: true },
  director: { type: String, require: true },
  legalAddress: { type: String, unique: true },
  kpp: { type: Number },
  okpo: { type: Number },
  ogrn: { type: Number },
});

const ipInfo = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: true },
  birthday: { type: Date },
  snils: { type: String, required: true, unique: true },
  legalAddress: { type: String, unique: true },
  ogrnip: { type: Number, unique: true },
});

const personInfo = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: true },
  birthday: { type: Date },
  snils: { type: String, required: true, unique: true },
  passportSeries: { type: Number, required: true },
  passportNumber: { type: Number, required: true },
  issueDate: { type: Date },
  issueBy: { type: String },
  departamentCode: { type: Number },
});

const bankDetails = new Schema({
  bik: { type: Number, unique: true },
  bankName: { type: String, unique: true },
  accountCheck: { type: Number, unique: true },
  accountCorrespondent: { type: Number, unique: true },
});

const organization = new Schema({
  subdomain: { type: String, required: true },
  name: { type: String, required: true },
  fullName: { type: String, require: true },
  login: { type: String, require: true },
  password: { type: String, require: true },
  inn: { type: String },
  contacts: organizationContacts,
  subscription: subscriptionInfo,
  type: organizationType,
  legalFaceInfo: legalFaceInfo,
  ipInfo: ipInfo,
  personInfo: personInfo,
  bankDetails: bankDetails,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = {
  orgModel: model('Organization', organization),
};
