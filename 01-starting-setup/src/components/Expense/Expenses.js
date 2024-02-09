import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onChangeFilter(selectedYear);
  };
  let filteredContent = props.expenseData.map((expense, index) => {
    console.log(expense);
    return (
      <ExpenseItem
        key={expense.id ? expense.id : index}
        title={expense.title}
        amount={expense.amount}
        // location={expense.location}
        date={expense.date}
      />
    );
  });
  if (props.expenseData.length === 0) {
    filteredContent = <p>No expenses found</p>;
  } else if (props.expenseData.length === 1) {
    filteredContent = (
      <>
        {filteredContent}
        <p>Only single Expense here. Please add more...</p>
      </>
    );
  }
  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
      </div>
      {filteredContent}
    </div>
  );
};

export default Expenses;
