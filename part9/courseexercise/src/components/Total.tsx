import { CourseData } from "./Content";
const Total = ({
  courseParts,
}: {
  courseParts: Array<CourseData>;
}): JSX.Element => {
  return (
    <div>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </div>
  );
};
export default Total;
