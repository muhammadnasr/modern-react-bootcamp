import React from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../reducers/expenses';
import { useNavigate } from 'react-router-dom';
import Expense from '../models/Expense';

const AddExpensePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm expense={new Expense({}).serialize()}
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          navigate('/');
        }}
      />
    </div>
  )
};

export default AddExpensePage
