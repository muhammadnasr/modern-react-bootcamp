import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';

const ExpenseListItem = ({ id }) => {
  const expense = useSelector((state) => state.expenses.entities[id])

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{expense.description}</h3>
      </Link>
      <p>{expense.amount} - {moment(expense.createdAt).fromNow()}</p>
    </div>
  )
};

export default ExpenseListItem;
