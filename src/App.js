import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoList, copyTodoList } from './redux/actions/todo.action';
import Loader from './components/Loader';

function App() {
    const { todoList, copyOfTodoList } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    // create a copy of todoList
    useEffect(() => {
        dispatch(copyTodoList(todoList));
    }, [todoList, dispatch]);

    return (
        <div>
            <TodoForm />
            {copyOfTodoList ? <TodoList /> : <Loader />}
        </div>
    );
}

export default App;
