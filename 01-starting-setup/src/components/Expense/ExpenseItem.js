import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const { date, location, title, amount } = props;
  const buttonHandler = (e) => {
    // Removing expenseItem via dom manipulation
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    console.log(`Button Clicked!!!`);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails location={location} title={title} amount={amount} />
      <button type="button" onClick={buttonHandler}>
        Click
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
