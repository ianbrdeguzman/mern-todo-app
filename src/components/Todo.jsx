import React from 'react';
import styles from './Todo.module.css';
import cross from '../assets/icon-cross.svg';
import { updateTodoItem, getTodoList } from './api';

const Todo = ({ todo, handleDeleteOnClick, theme, todoList, setTodoList }) => {
    const handleCheckOnChange = (id, bool) => {
        const updateTodo = async (id, bool) => {
            await updateTodoItem(id, !bool);
            const data = await getTodoList();
            setTodoList(data);
        };
        updateTodo(id, bool);
    };

    return (
        <li
            className={
                theme === 'dark'
                    ? styles.todo__item
                    : `${styles.todo__item} ${styles.light}`
            }
        >
            <input
                type='checkbox'
                name='done'
                id='done'
                checked={todo.completed}
                onChange={() => handleCheckOnChange(todo._id, todo.completed)}
            />
            <p className={todo.completed ? styles.checked : null}>
                {todo.text}
            </p>
            <button onClick={() => handleDeleteOnClick(todo._id)}>
                <img src={cross} alt='remove' />
            </button>
        </li>
    );
};

export default Todo;
