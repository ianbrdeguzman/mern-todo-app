import React from "react";
import styles from "./Todo.module.css";
import cross from "../assets/icon-cross.svg";
import { updateTodoItem, deleteTodoItem } from "../redux/actions/todo.action";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo }) => {
  const { theme } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleCheckOnChange = (id, bool) => {
    dispatch(updateTodoItem(id, !bool));
  };

  const handleDeleteOnClick = async (id) => {
    dispatch(deleteTodoItem(id));
  };

  return (
    <li
      className={
        theme === "dark"
          ? styles.todo__item
          : `${styles.todo__item} ${styles.light}`
      }
    >
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={todo.completed}
        onChange={() => handleCheckOnChange(todo._id, todo.completed)}
      />
      <p className={todo.completed ? styles.checked : null}>{todo.text}</p>
      <button onClick={() => handleDeleteOnClick(todo._id)}>
        <img src={cross} alt="remove" />
      </button>
    </li>
  );
};

export default Todo;
