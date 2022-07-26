import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { totalExpenses } from '../selectors/expenses'

const ExpensesSummary = () => {

  const expenses = Object.values(useSelector((state) => state.expenses.entities))

  return (
    <p>You have {expenses.length} expense(s), with total of {totalExpenses(expenses)}</p>
  )
}

export default ExpensesSummary;
