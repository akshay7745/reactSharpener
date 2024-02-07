import React from "react";

const ExpenseDate = (props) => {
  const { date } = props;
  //   return (
  //     <div>
  //       <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
  //       <div>{date.toLocaleString("en-US", { month: "long" })}</div>
  //       <div>{date.getFullYear()}</div>
  //     </div>
  //   );
  return React.createElement("div", {}, [
    React.createElement(
      "div",
      {},
      date.toLocaleString("en-US", { day: "2-digit" })
    ),
    React.createElement(
      "div",
      {},
      date.toLocaleString("en-US", { month: "long" })
    ),
    React.createElement("div", {}, date.getFullYear()),
  ]);
};

export default ExpenseDate;
