import React from 'react'
import ExpenseList from './ExpenseList'
import ExpensesTotal from './ExpensesSummary'

//Todo implement filters (by date and text)
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesTotal />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
