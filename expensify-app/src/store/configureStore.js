import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses';

const store = configureStore({
  reducer: {
    expenses: expensesReducer
  }
})

export default store

