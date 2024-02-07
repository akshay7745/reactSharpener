import ExpenseItem from "./components/Expense/ExpenseItem";
import ExpenseForm from "./components/Expense/ExpenseForm";

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
  return (
    <div>
      <h2>Let's get started!</h2>
      {data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
      <ExpenseForm />
    </div>
  );
};

export default App;
