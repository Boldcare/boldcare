const router = require("express").Router();
const patientsRoutes = require("./patients");

// ppatient routes
router.use("/patients", patientsRoutes);

module.exports = router;
