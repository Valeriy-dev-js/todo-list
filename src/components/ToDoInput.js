import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export const ToDoInput = ({ handleTodoSubmit }) => {
    const [todo, setTodo] = useState('');
    
    const pressEnter = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            await handleTodoSubmit(todo);
            setTodo('');
        };
    };

    return (
        <TextField
            multiline={true}
            label='ToDo'
            fullWidth
            variant='outlined'
            margin='normal'
            onChange={e => setTodo(e.target.value)}
            onKeyDown={(e) => pressEnter(e)}
            value={todo}
        />
    );
};