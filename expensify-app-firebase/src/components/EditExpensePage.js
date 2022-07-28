import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useNavigate, useParams, } from "react-router-dom";
import { useDatabase, useDatabaseObjectData } from 'reactfire'
import { ref, set, remove } from 'firebase/database'

const EditExpensePage = (props) => {

  const updateExpense = (expense) => {
    set(ref(database, `expenses/${id}`), expense).then(() => {
      console.log('updated');
      navigate('/');
    })
  }

  const deleteExpense = (id) => {
    remove(ref(database, `expenses/${id}`)).then(() => {
      console.log('deleted');
      navigate('/');
    })
  }

  const navigate = useNavigate()

  const { id } = useParams()
  const database = useDatabase();
  const { status, data: expense } = useDatabaseObjectData(ref(database, `expenses/${id}`))

  //TODO navigate to '/' if expense in undefined
  //TODO implement datapicker for createdAt
  if (status === 'loading') {
    return <span>loading...</span>;
  }

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          updateExpense(expense)
        }}
      />
      <button onClick={() => {
        deleteExpense(id)
      }}>Remove</button>
    </div>
  )
}

export default EditExpensePage;
