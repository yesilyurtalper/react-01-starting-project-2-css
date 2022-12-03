import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const entered = event.target.value.trim();
    setEnteredValue(entered);
    if (entered.length === 0) setIsValid(false);
    else setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    }
  };

  let formClass = styles.form_control;
  if(!isValid)
    formClass = `${styles.form_control} ${styles.invalid}`;
    
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
