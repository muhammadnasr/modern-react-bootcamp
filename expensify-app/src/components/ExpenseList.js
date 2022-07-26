import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpensesTotal from './ExpensesSummary';

const ExpenseList = () => {

  const expensesIDs = useSelector((state) => state.expenses.ids)

  return (
    <div>
      {
        expensesIDs.map((id) => {
          return <ExpenseListItem key={id} id={id} />;
        })
      }
    </div>

  );
}

export default ExpenseList

