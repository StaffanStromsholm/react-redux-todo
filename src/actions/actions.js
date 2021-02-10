export const STORE_TODO = 'STORE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const storeTodo = (currentState) => ({
    type: STORE_TODO,
    value: currentState
});
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id: id
})
