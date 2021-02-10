import * as actionTypes from '../actions/actions';

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_TODO:
            return {...state, todos: state.todos.concat({id: new Date(), value: action.value})
            }
        case actionTypes.DELETE_TODO:
            const updatedArray = state.todos.filter(result => result.id!== action.id)
            return {...state, todos: updatedArray}
    }
    return state;
}

const initialState = {
    todos: [
        {id: 1, value: 'This is my first list placeholder'},
        {id: 2, value: 'This is my second list placeholder'}
    ]
}

export default todosReducer;