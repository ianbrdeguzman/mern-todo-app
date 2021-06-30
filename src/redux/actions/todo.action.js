import axios from 'axios';
import {
    COPY_TODO_LIST,
    CREATE_TODO,
    DELETE_COMPLETED_TODO,
    DELETE_TODO,
    FILTER_LIST,
    GET_TODO_LIST,
    TOGGLE_THEME,
    UPDATE_TODO,
} from '../actionTypes';

export const getTodoList = () => async (dispatch) => {
    try {
        const { data } = await axios(
            // 'https://still-oasis-78638.herokuapp.com/',
            'https://us-central1-todo-firebase-functions.cloudfunctions.net/app/api/'
        );
        dispatch({ type: GET_TODO_LIST, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const postTodoItem = (input) => async (dispatch) => {
    const data = {
        text: input,
        completed: false,
    };

    try {
        const res = await axios.post(
            // 'https://still-oasis-78638.herokuapp.com/create',
            'https://us-central1-todo-firebase-functions.cloudfunctions.net/app/api/create',
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch({ type: CREATE_TODO, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteTodoItem = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(
            // `https://still-oasis-78638.herokuapp.com/delete/${id}`,
            `https://us-central1-todo-firebase-functions.cloudfunctions.net/app/api/delete/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch({ type: DELETE_TODO, payload: res.data });
    } catch (err) {
        console.log(err);
    }
};

export const updateTodoItem = (id, bool) => async (dispatch) => {
    const data = {
        completed: bool,
    };
    try {
        const res = await axios.put(
            // `https://still-oasis-78638.herokuapp.com/update/${id}`,
            `https://us-central1-todo-firebase-functions.cloudfunctions.net/app/api/update/${id}`,
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {
        console.log(err);
    }
};

export const deleteCompletedTodos = () => async (dispatch) => {
    try {
        const res = await axios.delete(
            // 'https://still-oasis-78638.herokuapp.com/delete',
            'https://us-central1-todo-firebase-functions.cloudfunctions.net/app/api/delete/',
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch({ type: DELETE_COMPLETED_TODO });
    } catch (err) {
        console.log(err);
    }
};

export const copyTodoList = (todoList) => (dispatch) => {
    dispatch({ type: COPY_TODO_LIST, payload: todoList });
};

export const toggleTheme = () => (dispatch) => {
    dispatch({ type: TOGGLE_THEME });
};

export const filterList = (newList) => (dispatch) => {
    dispatch({ type: FILTER_LIST, payload: newList });
};
