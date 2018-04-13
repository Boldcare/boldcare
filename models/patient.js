
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  visitReason: { type: String, required: false},
  //date: { type: Date, default: Date.now }
});


// const patientSchema = new Schema({
 
//   firstName: {
//     type: String,
//     //trim: true,
  
//   },
 
//   lastName: {
//     type: String,
//    // trim: true,
    
//   },
 
//   username: {
//     type: String,
//     //trim: true,
//    // required: "Username is Required"
//   },
 
//   password: {
//     type: String,
//     // trim: true,
//     // required: "Password is Required",
//     validate: [
//       function(input) {
//         return input.length >= 6;
//       },
//       "Password should be longer."
//     ]
//   },
  
//   email: {
//     type: String,
//     //unique: true,
//     match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
//   },

//   visitReason: {
//   	type: String
//   },
//   // `date` must be of type Date. The default value is the current date

//   // appointment: {
//   //   type: Schema.Types.ObjectId,
//   //   ref: "appointment"
//   // }, 

//   userCreated: {
//     type: Date,
//     default: Date.now
//   },
 
//   lastUpdated: Date,
  
//   fullName: String

// });



// // Custom method `setFullName`
// patientSchema.methods.setFullName = function() {
 
//   this.fullName = this.firstName + " " + this.lastName;
  
//   return this.fullName;
// };

// // Custom method `lastUpdatedDate`
// patientSchema.methods.lastUpdatedDate = function() {
 
//   this.lastUpdated = Date.now();
  
//   return this.lastUpdated;
// };

const patient = mongoose.model("Patient", patientSchema);

// Export the User model
module.exports = patient;

