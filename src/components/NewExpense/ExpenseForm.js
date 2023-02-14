import React, {useState} from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
//or
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // or
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // or
        // setUserInput((prevState) => {
        //     return{...prevState, enteredTitle: event.target.value}
        // })
    };
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
        // or
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // or
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };


  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}