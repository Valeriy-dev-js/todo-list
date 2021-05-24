import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export const ToDoInput = ({ handleSubmit }) => {
    const [todo, setTodo] = useState('');
    const handleChange = ({ target }) => {
        setTodo(target.value);
    };

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(todo)
            setTodo('')
        }}>
            <TextField
                label='ToDo'
                fullWidth
                variant='outlined'
                margin='normal'
                onChange={handleChange}
                value={todo}
            />
        </form>
    );
};