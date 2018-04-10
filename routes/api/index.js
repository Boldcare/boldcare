const router = require("express").Router();
const appointmentRoutes = require("./appointment");

// appointment routes
router.use("/patient", appointmentRoutes);

module.exports = router;
