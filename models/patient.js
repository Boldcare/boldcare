
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const patientSchema = new Schema({
 
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
 
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
 
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
 
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  visitReason: {
  	type: String
  },
  // `date` must be of type Date. The default value is the current date

  appointment: {
    type: Schema.Types.ObjectId,
    ref: "appointment"
  }, 

  userCreated: {
    type: Date,
    default: Date.now
  },
  // `lastUpdated` must be of type Date
  lastUpdated: Date,
  // `fullName` must be of type String
  fullName: String

});

// Custom Instance Methods

// Custom method `setFullName`
patientSchema.methods.setFullName = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullName = this.firstName + " " + this.lastName;
  // Return the new `fullName`
  return this.fullName;
};

// Custom method `lastUpdatedDate`
patientSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// This creates our model from the above schema, using mongoose's model method
const Patient = mongoose.model("Patient", patientSchema);

// Export the User model
module.exports = Patient;

