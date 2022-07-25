// Expenses Slice
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import{ v4 as uuidv4 } from 'uuid'

const expenseAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: 'expenses',
  initialState: expenseAdapter.getInitialState(),
  reducers: {
    addExpense: expenseAdapter.addOne,
    updateExpense: expenseAdapter.updateOne,
    removeExpense: expenseAdapter.removeOne,
  }
});

export const { addExpense, updateExpense, removeExpense } = actions

export default reducer