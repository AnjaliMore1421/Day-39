const express = require("express");
const router = express.Router();

const {
  getPatients,
  addPatient,
  deletePatient,
  getPatientById,
} = require("../controllers/patientController");

router.get("/", getPatients);
router.get("/:id", getPatientById);
router.post("/", addPatient);
router.delete("/:id", deletePatient);

module.exports = router;