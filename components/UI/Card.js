import classes from "./Card.module.css";

export default function Card({ children }) {
  return (
    <div className={classes.container}>
      <div>
        <h1>Class</h1>
      </div>
    </div>
  );
}
