import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeTodo, deleteTodo } from '../actions/actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
const URL = 'http://localhost:3001/todos'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Todos = () => {
    const classes = useStyles();
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    let newTodo = '';

    const onChangeHandler = (e) => {
        newTodo = e.target.value;
    }

    const lineThrough = (e) => {
        e.target.classList.toggle('line-through');
        console.log(e.target.childNode);
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (newTodo.length > 0) {
            const date = new Date();
            dispatch(storeTodo(newTodo))
            axios.post(URL, {title: newTodo, completed: false, created: date});
        }
    }

    return (
        <div>
            <form>
            <h1>Whatcha gonna do?</h1>
                <input placeholder="add-todo" onChange={onChangeHandler}></input>
                <Button
                    type="submit" onClick={(e) => addTodoHandler(e)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}>
                        Add
                </Button>
                <ul>
                    {todos.map(item => <li key={item.id}><p className="todo" onClick={lineThrough}>{item.value}</p>
                        <Button
                            onClick={() => dispatch(deleteTodo(item.id))}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}>
                                Delete
                        </Button></li>)}
                </ul>
            </form>
        </div>
    )
}

export default Todos;