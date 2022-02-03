const initialState = {
    todoName: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TODONAME':
            return {
                ...state,
                todoName: [...state.todoName, action.payload]
            };
        case 'SET_CLEAR':
            console.log(state.todoName)
            return {
                ...state,
                todoName:  action.payload
            }
        default:
            return state;
    }
}
