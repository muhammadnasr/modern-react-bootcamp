import React from 'react'
import ExpenseList from './ExpenseList'
import ExpensesSummary from './ExpensesSummary'
import { useDatabase, useDatabaseObjectData } from 'reactfire'
import { ref } from 'firebase/database'

//Todo implement filters (by date and text)
const ExpenseDashboardPage = () => {

  //todo can we make component less dependant on firebase and use reducers?
  const database = useDatabase();
  //don't use useDatabaseListData as it contains a bug with updating
  const { status, data } = useDatabaseObjectData(ref(database, 'expenses'))

  let expenses = [];

  if (status === 'loading') {
    return <span>loading...</span>
  } else if (status === 'success') {

    delete data.NO_ID_FIELD;//added by reactfire
    expenses = Object.values(data)

    if (!expenses.length) {
      return <span>No expenses yet!</span>
    }
  }

  return (
    <div>
      <ExpensesSummary expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  )
};

export default ExpenseDashboardPage;
