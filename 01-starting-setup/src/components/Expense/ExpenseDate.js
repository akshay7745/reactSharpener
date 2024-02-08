import React from "react";

const ExpenseDate = (props) => {
  const { date } = props;
  const newDate = new Date(date);
  return (
    <div>
      <div>{newDate.toLocaleDateString("en-US", { weekday: "long" })}</div>
      <div>{newDate.toLocaleString("en-US", { month: "long" })}</div>
      <div>{newDate.getFullYear()}</div>
    </div>
  );
  // return React.createElement("div", {}, [
  //   React.createElement(
  //     "div",
  //     {},
  //     date.toLocaleString("en-US", { day: "2-digit" })
  //   ),
  //   React.createElement(
  //     "div",
  //     {},
  //     date.toLocaleString("en-US", { month: "long" })
  //   ),
  //   React.createElement("div", {}, date.getFullYear()),
  // ]);
};

export default ExpenseDate;
