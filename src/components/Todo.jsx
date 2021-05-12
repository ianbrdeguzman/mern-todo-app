import React, { useState } from 'react';
import styles from './Todo.module.css';
import cross from '../assets/icon-cross.svg';

const Todo = ({ todo, handleRemoveOnClick, theme, todoList, setTodoList }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckOnChange = (id) => {
        console.log(id);
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
                onChange={() => handleCheckOnChange(todo._id)}
            />
            {/* <p className={!checked ? styles.checked : null}>{todo.text}</p> */}
            <p className={checked ? styles.checked : null}>{todo.text}</p>
            <button onClick={() => handleRemoveOnClick(todo._id)}>
                <img src={cross} alt='remove' />
            </button>
        </li>
    );
};

export default Todo;
