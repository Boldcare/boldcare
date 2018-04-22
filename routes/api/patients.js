const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");


// Matches with "/api/patients"
// router.route("/")
//   .get(patientsController.findAll)
//   .post(patientssController.create);

router.route("/")
  .get(patientsController.findAll)
 

  router.route("/patients/")
   .post(patientsController.create);

// Matches with "/api/patients/:id"
router.route("/patients/:id")
  .get(patientsController.findById)
  .put(patientsController.update)
  // .delete(patientsController.remove);

module.exports = router;
