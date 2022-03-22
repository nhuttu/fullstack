import patientData from "../data/patients";
import { NewPatientEntry, NonSensitivePatients, Patients } from "../types";
import { v1 as uuid } from "uuid";
const patients: Array<Patients> = patientData;

const getPatients = (): Array<Patients> => {
  return patients;
};
const getNonSensitivePatients = (): NonSensitivePatients[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
const addEntry = (entry: NewPatientEntry): Patients => {
  console.log(entry);
  const newPatientEntry = { id: uuid(), ...entry };
  patients.push(newPatientEntry);
  return newPatientEntry;
};
export default { getPatients, getNonSensitivePatients, addEntry };
