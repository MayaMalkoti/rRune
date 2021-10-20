import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState(2021);
  const yearChangeHandle = (year) => {
    setFilteredYear(year);
    console.log('Filtered Year : ', filteredYear);
  }; 
  return (
    <Card className="expenses">
      <ExpenseFilter yearChangeHandle={yearChangeHandle} />
      {items.map(({ id, date, title, price }) => (
        <ExpenseItem key={id} date={date} title={title} price={price} />
      ))}
    </Card>
  );
};

export default Expenses;
