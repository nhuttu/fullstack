import express from "express";
import calculateExercises from "./exerciseCalculator";
const app = express();

app.use(express.json());
app.post("/exercises", (req, res) => {
  const target = req.body.target;
  const daily = req.body.daily_exercises;
  if (!target || isNaN(Number(target)) || !daily || isNaN(Number(daily))) {
    return res.json({ error: "malformatted parameters" });
  }

  const result = calculateExercises(target, daily);
  return res.json(result);
});

app.listen(3003, () => console.log("port 3003"));
