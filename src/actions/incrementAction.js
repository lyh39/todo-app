export const setTodoName = todoName => {
    return {
        type: 'SET_TODONAME',
        payload: todoName
    }
};

export const setRemoveName = todoName => {
    return {
        type: 'SET_CLEAR',
        payload: todoName
    }
};