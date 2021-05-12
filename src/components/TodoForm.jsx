import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import { postTodoItem, getTodoList } from './api';

const TodoForm = ({ todoList, setTodoList, theme, handleThemeOnClick }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const createPost = async (input) => {
            await postTodoItem(input);
            const data = await getTodoList();
            setTodoList(data);
        };
        createPost(input);
        setInput('');
    };

    return (
        <div
            className={
                theme === 'dark'
                    ? styles.container
                    : `${styles.container} ${styles.light}`
            }
        >
            <header className={styles.header}>
                <h1>TODO</h1>
                <button onClick={handleThemeOnClick}>
                    <img src={theme === 'dark' ? sun : moon} alt='light mode' />
                </button>
            </header>
            <form
                className={
                    theme === 'dark'
                        ? styles.form
                        : `${styles.form} ${styles.light}`
                }
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Create a new todo...'
                />
            </form>
        </div>
    );
};

export default TodoForm;
