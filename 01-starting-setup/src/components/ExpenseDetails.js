function ExpenseDetails(props) {
  const { title, amount, location } = props;
  return (
    <div className="expense-item__description">
      <h2 className="expense-item__price">{title}</h2>
      <div>${amount}</div>
      <h3>{location}</h3>
    </div>
  );
}

export default ExpenseDetails;
