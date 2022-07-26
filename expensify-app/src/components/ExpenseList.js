import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = () => {

  const expenses = useSelector((state) => state.expenses)

  return (
    <div>
      <h1>Expense List</h1>
      {
        expenses.ids.map((id) => {
          return <ExpenseListItem key={id} id={id} />;
        })}
    </div>
  );
}

export default ExpenseList

