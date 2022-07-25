import React from 'react';
import ExpenseForm from './ExpenseForm';
import { updateExpense, removeExpense } from '../reducers/expenses';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const EditExpensePage = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { id } = useParams()
  const expense = useSelector((state) => state.expenses.entities[id])

  //TODO navigate to '/' if expense in undefined

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(updateExpense({ id: expense.id, changes: expense }))
          navigate('/')
        }}
      />
      <button onClick={() => {
        dispatch(removeExpense(id))
        navigate('/')
      }}>Remove</button>
    </div>
  )
}

export default EditExpensePage;
