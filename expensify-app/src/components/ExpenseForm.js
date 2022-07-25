import React, { useState } from 'react';

const ExpenseForm = (props) => {

  let [expense, setExpense] = useState(props.expense)

  onChange = (e) => {
    const { id, value } = e.target;

    if (id == 'amount' && (!value || !value.match(/^\d{1,}(\.\d{0,2})?$/))) {
      return
    }
    setExpense({
      ...expense,
      [id]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(expense);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          id='description'
          type="text"
          placeholder="Description"
          autoFocus
          value={expense.description}
          onChange={onChange}
        />
        <input
          id='amount'
          type="text"
          placeholder="Amount"
          value={expense.amount}
          onChange={onChange}
        />
        <textarea
          id='note'
          placeholder="Add a note for your expense (optional)"
          value={expense.note}
          onChange={onChange}
        >
        </textarea>
        <button>Save Expense</button>
      </form>
    </div>
  )

}

export default ExpenseForm