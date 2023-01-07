import React, { useState, useRef } from "react";

import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";

const CourseInput = (props) => {
  const enteredValue = useRef();
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.current.value.length === 0) {
      setIsValid(false);
      return;
    }
    
    setIsValid(true);
    props.onAddGoal(enteredValue.current.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes.form_control} ${!isValid && classes.invalid}`}>
        <label>Course Goal</label>
        <input type="text" ref={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
