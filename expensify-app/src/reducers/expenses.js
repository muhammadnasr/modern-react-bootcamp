// Expenses Slice
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

const expensesAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: 'expenses',
  initialState: expensesAdapter.getInitialState(),
  reducers: {
    addExpense: expensesAdapter.addOne,
    updateExpense: expensesAdapter.updateOne,
    removeExpense: expensesAdapter.removeOne,
  }
});

export const { addExpense, updateExpense, removeExpense } = actions

export const {
  selectAll: selectAllExpenses,
  selectById: selectExpenseById,
} = expensesAdapter.getSelectors((state) => state.expenses)

export default reducer