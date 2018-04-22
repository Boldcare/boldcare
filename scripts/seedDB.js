const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/patientstest",
  {
    useMongoClient: true
  }
);

const patientsSeed = [
  {
    firsName: "Stephen",
    lastName: "King",
    Password: "test123",
    username:"test123"
      
  },
  
];

db.Patients

  .remove({})
  .then(() => db.Patients.collection.insertMany(PatientsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
