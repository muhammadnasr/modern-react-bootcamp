import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useNavigate } from 'react-router-dom';
import Expense from '../models/Expense';
import { useDatabase } from 'reactfire'
import { ref, set } from 'firebase/database'

const AddExpensePage = () => {
//todo merge addexpense with edit expense to be a single smart component named upsertExpensePage
  const navigate = useNavigate()
  const database = useDatabase()

  const addExpense = (expense) => {
    set(ref(database, `expenses/${expense.id}`), expense).then(() => {
      console.log('added');
      navigate('/');
    })
  }
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm expense={new Expense({}).serialize()}
        onSubmit={(expense) => {
          addExpense(expense);
        }}
      />
    </div>
  )
};

export default AddExpensePage
