import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoList } from './components/api';

function App() {
    const [theme, setTheme] = useState('dark');
    const [todoList, setTodoList] = useState('');
    const [filterList, setFilterList] = useState('');

    const handleThemeOnClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        setFilterList(todoList);
    }, [todoList]);

    useEffect(() => {
        const fetchTodoList = async () => {
            const data = await getTodoList();
            setTodoList(data);
        };
        fetchTodoList();
    }, []);

    return (
        <div>
            <TodoForm
                setTodoList={setTodoList}
                todoList={todoList}
                theme={theme}
                handleThemeOnClick={handleThemeOnClick}
            />
            {filterList && (
                <TodoList
                    setTodoList={setTodoList}
                    todoList={todoList}
                    theme={theme}
                    setFilterList={setFilterList}
                    filterList={filterList}
                />
            )}
        </div>
    );
}

export default App;
