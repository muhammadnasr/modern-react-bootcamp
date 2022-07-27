import { totalExpenses } from '../selectors/expenses'

const ExpensesSummary = ({expenses}) => {

  return (
    <p>You have {expenses.length} expense(s), with total of {totalExpenses(expenses)}</p>
  )
}

export default ExpensesSummary;
