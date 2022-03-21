import patientData from "../data/patients";
import { NonSensitivePatients, Patients } from "../types";

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
export default { getPatients, getNonSensitivePatients };
