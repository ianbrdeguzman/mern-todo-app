import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import { todoListReducer } from './reducers/todo.reducer';

const store = createStore(
    todoListReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
