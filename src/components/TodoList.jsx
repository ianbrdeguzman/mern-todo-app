import React, { useState } from "react";
import styles from "./TodoList.module.css";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { filterList, deleteCompletedTodos } from "../redux/actions/todo.action";

const TodoList = () => {
  const [filter, setFilter] = useState("all");

  const { todoList, copyOfTodoList, theme } = useSelector((state) => state);

  const dispatch = useDispatch();

  const activeList = todoList?.filter((todo) => todo.completed === false);

  const handleFilterOnClick = (e) => {
    let newList;
    if (e.target.value === "all") {
      newList = todoList;
      setFilter("all");
    } else if (e.target.value === "active") {
      newList = todoList.filter((todo) => todo.completed !== true);
      setFilter("active");
    } else {
      newList = todoList.filter((todo) => todo.completed === true);
      setFilter("completed");
    }
    dispatch(filterList(newList));
  };

  const handleClearOnClick = () => {
    dispatch(deleteCompletedTodos());
  };

  return (
    <div
      className={
        theme === "dark"
          ? styles.container
          : `${styles.container} ${styles.light}`
      }
    >
      <ul className={styles.content}>
        {copyOfTodoList?.map((todo) => {
          return <Todo todo={todo} key={todo._id} />;
        })}
        <div className={styles.content__footer}>
          <p>{activeList?.length} items left</p>
          <button onClick={handleClearOnClick}>Clear Completed</button>
        </div>
        <div className={styles.content__tools}>
          <button
            value="all"
            onClick={handleFilterOnClick}
            className={filter === "all" ? styles.selected : null}
          >
            All
          </button>
          <button
            value="active"
            onClick={handleFilterOnClick}
            className={filter === "active" ? styles.selected : null}
          >
            Active
          </button>
          <button
            value="completed"
            onClick={handleFilterOnClick}
            className={filter === "completed" ? styles.selected : null}
          >
            Completed
          </button>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
