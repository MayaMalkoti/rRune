import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, price }) => {
  const [Title, setTitle] = useState(title);
  const [Price, setPrice] = useState(price);
  // let Title = title;
  const clickHandler = () => {
    setTitle('Updated.');
    setPrice(300);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">${Price}</div>
      </div>
      <button onClick={clickHandler}>Click Me!</button>
    </Card>
  );
};

export default ExpenseItem;
