const ExpensesFilter = (props) => {
  const dropdownChangedHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <div>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangedHandler}>
          <option value={"2024"}>2024</option>
          <option value={"2023"}>2023</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
