import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onSubmit }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewExpense;
