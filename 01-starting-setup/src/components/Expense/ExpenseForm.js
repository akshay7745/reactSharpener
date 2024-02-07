// Create a component called ExpenseForm containing inputs like Expense title, Expense Amount and Date.
// Add a button below it .
// Call the ExpenseForm from App.js so that it is visible on the screen

const ExpenseForm = () => {
  const formChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <div>
        <label htmlFor="title">Enter Title :</label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Enter Amount :</label>
        <input
          name="amount"
          id="amount"
          type="number"
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Enter Date :</label>
        <input name="date" id="date" type="date" onChange={formChangeHandler} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default ExpenseForm;
