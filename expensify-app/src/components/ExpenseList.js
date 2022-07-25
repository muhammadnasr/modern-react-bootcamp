import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import store from '../store/configureStore'

export default ExpenseList = () => {

  let expenses = store.getState().expenses

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

