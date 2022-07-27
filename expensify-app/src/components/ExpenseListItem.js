import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ expense }) => {

  return (
    <div>
      <Link to={`/edit/${expense.id}`}>
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
