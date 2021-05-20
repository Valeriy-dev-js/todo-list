import { TextField } from "@material-ui/core";
import React from "react";

export const ToDoInput = ({handleChange, handleSubmit, value}) => {
    return (
    <form onSubmit={handleSubmit}>
        <TextField 
        label = 'ToDo'
        fullWidth
        variant='outlined'
        margin='normal'
        onChange={handleChange}
        value={value}
        />
    </form>
    )};