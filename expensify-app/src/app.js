import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'
import React from 'react';
import store from './store/configureStore';
import { addExpense } from './reducers/expenses';
import Expense from './models/Expense';

//todo implement testing for redux and components using RTL
store.dispatch(addExpense(new Expense({ description: 'Water bill', amount: 4500 }).serialize()))
store.dispatch(addExpense(new Expense({ description: 'Gas bill', createdAt: 1000 }).serialize()))
store.dispatch(addExpense(new Expense({ description: 'Rent', amount: 109500 }).serialize()))

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>
);