import {
  COPY_TODO_LIST,
  CREATE_TODO,
  DELETE_COMPLETED_TODO,
  DELETE_TODO,
  FILTER_LIST,
  GET_TODO_LIST,
  TOGGLE_THEME,
  UPDATE_TODO,
} from "../actionTypes";

const initialState = {
  todoList: [],
  copyOfTodoList: [],
  theme: "dark",
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todoList: action.payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo._id !== action.payload._id
        ),
      };
    case UPDATE_TODO:
      const index = state.todoList.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.todoList[index].completed = action.payload.completed;
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case DELETE_COMPLETED_TODO:
      const listOfActiveTodos = state.todoList.filter(
        (todo) => todo.completed === false
      );
      return {
        ...state,
        todoList: [...listOfActiveTodos],
      };
    case COPY_TODO_LIST:
      return { ...state, copyOfTodoList: action.payload };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case FILTER_LIST:
      return {
        ...state,
        copyOfTodoList: action.payload,
      };
    default:
      return state;
  }
};
