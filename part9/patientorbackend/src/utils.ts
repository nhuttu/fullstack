import { NewPatientEntry } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const parseDoB = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect DoB ");
  }
  return date;
};
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect Name");
  }
  return name;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect SSN");
  }
  return ssn;
};
const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect Occupation");
  }
  return occupation;
};
const parseGender = (gender: unknown): string => {
  if (!gender || !isString(gender)) {
    throw new Error("Incorrect gender");
  }
  return gender;
};
const toNewPatientEntry = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: NewPatientEntry): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDoB(dateOfBirth),
    ssn: parseSSN(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
  };
  return newEntry;
};
export default toNewPatientEntry;
