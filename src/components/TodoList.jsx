import React from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';
import { deleteTodoItem, getTodoList, deleteCompletedTodos } from './api';

const TodoList = ({
    todoList,
    setTodoList,
    theme,
    filterList,
    setFilterList,
}) => {
    const handleDeleteOnClick = (id) => {
        const deleteTodo = async () => {
            await deleteTodoItem(id);
            const data = await getTodoList();
            setTodoList(data);
        };
        deleteTodo();
    };

    const handleFilterOnClick = (e) => {
        let filteredList;
        if (e.target.value === 'all') {
            filteredList = todoList;
        } else if (e.target.value === 'active') {
            filteredList = todoList.filter((todo) => todo.completed !== true);
        } else {
            filteredList = todoList.filter((todo) => todo.completed === true);
        }
        setFilterList(filteredList);
    };

    const handleClearOnClick = () => {
        const clearCompletedTodos = async () => {
            await deleteCompletedTodos();
            const data = await getTodoList();
            setTodoList(data);
        };
        clearCompletedTodos();
    };

    return (
        <div
            className={
                theme === 'dark'
                    ? styles.container
                    : `${styles.container} ${styles.light}`
            }
        >
            <ul className={styles.content}>
                {filterList?.map((todo) => {
                    return (
                        <Todo
                            todo={todo}
                            key={todo._id}
                            handleDeleteOnClick={handleDeleteOnClick}
                            theme={theme}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    );
                })}
                <div className={styles.content__footer}>
                    <p>{todoList.length} items left</p>
                    <button onClick={handleClearOnClick}>
                        Clear Completed
                    </button>
                </div>
                <div className={styles.content__tools}>
                    <button value='all' onClick={handleFilterOnClick}>
                        All
                    </button>
                    <button value='active' onClick={handleFilterOnClick}>
                        Active
                    </button>
                    <button value='completed' onClick={handleFilterOnClick}>
                        Completed
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default TodoList;
