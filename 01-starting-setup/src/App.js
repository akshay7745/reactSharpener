import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";
const data = [
  {
    title: "Electricity Bill",
    amount: 12,
    location: "Pune",
    date: new Date(2024, 1, 6),
  },
  {
    title: "Dinner bill",
    amount: 15,
    location: "Kolhapur",
    date: new Date(2023, 11, 15),
  },
  {
    title: "Medicine",
    amount: 20,
    location: "Kolkata",
    date: new Date(2023, 10, 18),
  },
  {
    title: "Fuel",
    amount: 17,
    location: "Chennai",
    date: new Date(2023, 10, 25),
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
      console.log(+item.date.getFullYear(), +year);
      return +item.date.getFullYear() === +year;
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
