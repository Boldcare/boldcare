 import axios from "axios";

export default {
  // Gets all patients
  getPatients: function() {
    console.log('getting  patients ')
    return axios.get("/");
    
  },
  // Gets the patient with the given id
  getPatient: function(id) {
    return axios.get("api/patients/" + id);
  },
  // Deletes the patient with the given id
  deletePatient: function(id) {
    return axios.delete("/api/patients/" + id);
  },
  // Saves a patient to the database
  savePatient: function(patientInfo) {
    console.log("patient info", patientInfo)
    return axios.post("/api/patient/patients", patientInfo);
   

  }
};
