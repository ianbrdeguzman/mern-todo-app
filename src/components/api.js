import axios from 'axios';

export const getTodoList = async () => {
    try {
        const { data } = await axios(
            'https://still-oasis-78638.herokuapp.com/'
        );
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const postTodoItem = async (input) => {
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
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteTodoItem = async (id) => {
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
    } catch (err) {
        console.log(err);
    }
};

export const deleteCompletedTodos = async () => {
    try {
        await axios.delete('https://still-oasis-78638.herokuapp.com/delete', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateTodoItem = async (id, bool) => {
    const data = {
        completed: bool,
    };
    try {
        const res = await axios.put(
            `https://still-oasis-78638.herokuapp.com/update/${id}`,
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};
