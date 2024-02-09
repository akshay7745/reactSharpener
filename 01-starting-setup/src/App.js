import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";
const data = [
  {
    title: "Electricity Bill",
    amount: 12,
    location: "Pune",
    date: "2024-02-06",
  },
  {
    title: "Dinner bill",
    amount: 15,
    location: "Kolhapur",
    date: "2023-12-15",
  },
  {
    title: "Medicine",
    amount: 20,
    location: "Kolkata",
    date: "2023-03-06",
  },
  {
    title: "Fuel",
    amount: 17,
    location: "Chennai",
    date: "2023-11-25",
  },
];

const App = () => {
  const [expenseData, setExpenseData] = useState(data);
  const [expenseFilteredData, setExpenseFilteredData] = useState(data);
  const addExpenseHandler = (expense) => {
    setExpenseData((prevState) => {
      return [expense, ...prevState];
    });
    setExpenseFilteredData((prevState) => {
      return [expense, ...prevState];
    });
  };

  const addFilterHandler = (year) => {
    const filteredData = expenseData.filter((item) => {
      return item.date.split("-")[0] === year;
    });
    // console.log(filteredData);
    setExpenseFilteredData(filteredData);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        onChangeFilter={addFilterHandler}
        expenseData={expenseFilteredData}
      />
    </div>
  );
};

export default App;
