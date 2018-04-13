const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

// Matches with "/api/patients"
router.route("/")
  .get(appointmentController.findAll)
 

  router.route("/patients")
   .post(appointmentController.create);
  // .post(appointmentController.create);

// Matches with "/api/patients/:id"
router
  .route("/:id")
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

module.exports = router;
