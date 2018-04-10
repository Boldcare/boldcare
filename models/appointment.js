const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  day: { type: Date, default: Date.now },
  time: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  visitReason: { type: String, required: false},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
