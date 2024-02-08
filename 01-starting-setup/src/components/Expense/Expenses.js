import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selelectedYear) => {
    setFilteredYear(selelectedYear);
  };
  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
      </div>
    </div>
  );
};

export default Expenses;
