import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { postTodoItem, toggleTheme } from "../redux/actions/todo.action";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const { theme } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(postTodoItem(input));
      setInput("");
    }
  };

  const handleThemeOnClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={
        theme === "dark"
          ? styles.container
          : `${styles.container} ${styles.light}`
      }
    >
      <header className={styles.header}>
        <h1>TODO</h1>
        <button onClick={handleThemeOnClick}>
          <img src={theme === "dark" ? sun : moon} alt="light mode" />
        </button>
      </header>
      <form
        className={
          theme === "dark" ? styles.form : `${styles.form} ${styles.light}`
        }
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default TodoForm;
