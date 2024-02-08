import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onChangeFilter(selectedYear);
  };
  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
      </div>
      {props.expenseData.map((expense, index) => (
        <ExpenseItem
          key={expense.id ? expense.id : index}
          title={expense.title}
          amount={expense.amount}
          // location={expense.location}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
