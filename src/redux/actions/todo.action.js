import axios from 'axios';
import {
    COPY_TODO_LIST,
    FILTER_LIST,
    GET_TODO_LIST,
    TOGGLE_THEME,
} from '../actionTypes';

export const getTodoList = () => async (dispatch) => {
    try {
        const { data } = await axios(
            'https://still-oasis-78638.herokuapp.com/'
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
        await axios.post(
            'https://still-oasis-78638.herokuapp.com/create',
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch(getTodoList());
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteTodoItem = (id) => async (dispatch) => {
    try {
        await axios.delete(
            `https://still-oasis-78638.herokuapp.com/delete/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch(getTodoList());
    } catch (err) {
        console.log(err);
    }
};

export const updateTodoItem = (id, bool) => async (dispatch) => {
    const data = {
        completed: bool,
    };
    try {
        await axios.put(
            `https://still-oasis-78638.herokuapp.com/update/${id}`,
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        dispatch(getTodoList());
    } catch (err) {
        console.log(err);
    }
};

export const deleteCompletedTodos = () => async (dispatch) => {
    try {
        await axios.delete('https://still-oasis-78638.herokuapp.com/delete', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        dispatch(getTodoList());
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
