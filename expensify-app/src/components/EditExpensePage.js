import React from 'react';
import ExpenseForm from './ExpenseForm';
import { updateExpense, removeExpense } from '../reducers/expenses';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectExpenseById } from '../reducers/expenses';

const EditExpensePage = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { id } = useParams()
  const expense = useSelector((state) => selectExpenseById(state,id))

  //TODO navigate to '/' if expense in undefined
  //TODO implement datapicker for createdAt
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          //todo: use upsert instead of update and insert
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
