import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  const { date, location, title, amount } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails location={location} title={title} amount={amount} />
    </div>
  );
}

export default ExpenseItem;
