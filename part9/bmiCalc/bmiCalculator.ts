const calculateBmi = (a: number, b: number): string => {
  b = b / 100;
  if (b === 0) return "Height can't be 0!";
  else if (b < 0 || a <= 0) {
    return "can't be les than 0";
  } else if (a / (b * b) < 18.5) {
    return "Underweight";
  } else if (a / (b * b) < 24.9) {
    return "Normal weight";
  } else if (a / (b * b) < 29.9) {
    return "Overweight";
  }
  return "Obesity";
};
export default calculateBmi;
