interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
const calculateExercises = (compareTo: number, args: Array<number>): Result => {
  if (isNaN(compareTo)) throw new Error("compareTo not a number!");
  if (compareTo === 0) throw new Error("compare to can't be 0!");
  if (args.length === 0) throw new Error("no numbers to compare to!");
  const filteredData = args.filter((e) => e > 0);
  const avg = filteredData.reduce((a, b) => a + b, 0) / args.length;
  let text = "amazing";
  let rating = 3;
  if (compareTo === avg) {
    text = "good";
    rating = 2;
  } else if (compareTo > avg) {
    text = "do better";
    rating = 1;
  }

  return {
    periodLength: args.length,
    trainingDays: filteredData.length,
    success: compareTo < avg,
    rating: rating,
    ratingDescription: text,
    target: compareTo,
    average: avg,
  };
};
// const abc = Number(process.argv[2]);
// const args = process.argv.slice(3, process.argv.length).map((e) => Number(e));
// console.log(args);
// console.log(process.argv[2]);
// console.log(calculateExercises(abc, args));
export default calculateExercises;
