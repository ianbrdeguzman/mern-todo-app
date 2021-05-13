import {
    COPY_TODO_LIST,
    FILTER_LIST,
    GET_TODO_LIST,
    TOGGLE_THEME,
} from '../actionTypes';

const initialState = {
    todoList: [],
    copyOfTodoList: [],
    theme: 'dark',
};

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                todoList: action.payload,
            };
        case COPY_TODO_LIST:
            return { ...state, copyOfTodoList: action.payload };
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark',
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
