import { Gender, NewPatientEntry } from "./types";

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
  console.log(name);
  if (!name || !isString(name)) {
    throw new Error("Incorrect Name");
  }
  return name;
};

const parseSSN = (ssn: unknown): string => {
  console.log(ssn);
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
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};
const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
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
  console.log(name);
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
