import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, location, title, amount } = props;

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item__price">{title}</h2>
        <div>${amount}</div>
        <h3>{location}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
