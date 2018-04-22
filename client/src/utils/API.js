import axios from "axios";

export default {
  // Gets all patients
  getPatient: function() {
    return axios.get("/api/patients");
  },
  // Gets the patient with the given id
  getPatients: function(id) {
    return axios.get("/api/patients/patients/" + id);
  },
  // Deletes the patient with the given id
  deletePatients: function(id) {
    return axios.delete("/api/patients/" + id);
  },
  // Saves a patient to the database
  savePatients: function(patientData) {
    console.log(patientData)
    return axios.post("/api/patients/patients", patientData);
  }
};
