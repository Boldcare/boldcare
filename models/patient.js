const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true},
  SSN: {type: Number, required: true},
  phoneNumber: {type: Number, required: true},
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  visitReason: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
