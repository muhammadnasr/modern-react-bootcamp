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
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(expense.amount)}
        -
        {moment(expense.createdAt).fromNow()}
      </p>
    </div>
  )
};

export default ExpenseListItem;
