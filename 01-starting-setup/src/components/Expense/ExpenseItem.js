import React, { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amt, setAmt] = useState(props.amount);
  const { date, location, title1, amount } = props;
  const buttonHandler = (e) => {
    // Removing expenseItem via dom manipulation
    // e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    setTitle("updated!!!");
    console.log(title);
  };
  const amountButtonHandler = (e) => {
    setAmt(100);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails location={location} title={title} amount={amt} />
      <button type="button" onClick={buttonHandler}>
        Change title
      </button>
      <button type="button" onClick={amountButtonHandler}>
        Change amount
      </button>
    </div>
  );

  // return React.createElement("div", { className: "expense-item" }, [
  //   React.createElement(ExpenseDate, { date: date }),
  //   React.createElement(ExpenseDetails, {
  //     title: title,
  //     location: location,
  //     amount: amount,
  //   }),
  // ]);
};

export default ExpenseItem;
