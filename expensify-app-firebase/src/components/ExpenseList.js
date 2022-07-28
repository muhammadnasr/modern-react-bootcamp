import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({expenses}) => {
//todo add paginage
//todo make sure only updated item is rendered (memoize?)
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

