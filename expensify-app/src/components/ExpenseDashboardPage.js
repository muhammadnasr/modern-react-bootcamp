import React from 'react'
import ExpenseList from './ExpenseList'
import ExpensesTotal from './ExpensesSummary'
import { useSelector } from 'react-redux';
import { selectAllExpenses } from '../reducers/expenses';

//Todo implement filters (by date and text)
const ExpenseDashboardPage = () => {
  const expenses = useSelector((state) => selectAllExpenses(state))

  return (
    <div>
      <ExpensesTotal expenses={expenses} />
      <ExpenseList expenses={expenses}/>
    </div>
  )
};

export default ExpenseDashboardPage;
