import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ yearChangeHandle }) => {
  // const [Year, setYear] = useState('');
  const years = [2021, 2020, 2019, 2018];
  const yearChangeHandler = (event) => {
    yearChangeHandle(event.target.value);
  };
  const yearMap = (year) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  };
  return (
    <div className="expense-filter">
      <h3>Filter by year</h3>
      <select name="year" id="year" onChange={yearChangeHandler}>
        {years.map(yearMap)}
      </select>
    </div>
  );
};

export default ExpenseFilter;
