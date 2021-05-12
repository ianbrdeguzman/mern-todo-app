import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { data } from './components/data';

function App() {
    const [theme, setTheme] = useState('dark');
    const [todoList, setTodoList] = useState(data);
    const [filterList, setFilterList] = useState(data);

    const handleThemeOnClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div>
            <TodoForm
                setTodoList={setTodoList}
                todoList={todoList}
                theme={theme}
                handleThemeOnClick={handleThemeOnClick}
            />
            <TodoList
                setTodoList={setTodoList}
                todoList={todoList}
                theme={theme}
                setFilterList={setFilterList}
                filterList={filterList}
            />
        </div>
    );
}

export default App;
