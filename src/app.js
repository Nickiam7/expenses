import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import ConfigureStore from './store/ConfigureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';

const store = ConfigureStore();

store.dispatch(addExpense({description: 'Gass Bill', amount: 150, createdAt: 1000}));
store.dispatch(addExpense({description: 'Water Bill', amount: 250}));
store.dispatch(addExpense({description: 'Rent', amount: 10150}));


const jsx = (
    <Provider store={store}>
        <div className="container">
            <AppRouter />
        </div>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));