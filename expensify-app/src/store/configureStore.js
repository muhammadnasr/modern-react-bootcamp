import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses';

export default store = configureStore({
  reducer: {
    expenses: expensesReducer
  }
})

