import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({expenses}) => {

  return (
    <div>
      {
        expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} expense={expense}/>;
        })
      }
    </div>

  );
}

export default ExpenseList

