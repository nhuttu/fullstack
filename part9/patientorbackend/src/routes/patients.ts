import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils";
const router = express.Router();

router.use("/", (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post("/", (req, res) => {
  console.log("hello");
  try {
    const newEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addEntry(newEntry);
    res.json(addedEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
export default router;
