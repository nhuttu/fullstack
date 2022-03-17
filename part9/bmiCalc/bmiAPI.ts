import calculateBmi from "./bmiCalculator";
import express from "express";
const app = express();

app.get("/bmi", (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  console.log(height);
  console.log(weight);
  if (!weight || !height || height < 0 || weight < 0) {
    return res.json({ error: "malformatted parameters" });
  }
  const result = calculateBmi(weight, height);
  return res.json({ weight: weight, height: height, bmi: result });
});
const port = 3003;

app.listen(port, () => console.log("listening to port 3003"));
