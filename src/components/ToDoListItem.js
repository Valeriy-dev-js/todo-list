import { Checkbox, Grid, IconButton, ListItem, ListItemText, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const styles = {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
    marginBottom: '10px'
};

export const ToDoLIstItem = ({ todo, handleDelete, handleCheck, handleTodoChange }) => {

    const time = new Date(todo.date).toLocaleString().match(/\d+.\d+.\d{4}/s)[0];
    const [toggleInput, setToggleInput] = useState(false);
    const [inpitValue, setInputValue] = useState(todo.title);

    const handleKeyDown = (id, e) => {
        if (e.key === 'Enter') {
            setToggleInput(false);
            handleTodoChange(id, inpitValue);
        };
        if (e.key === 'Escape') {
            setToggleInput(false);
            setInputValue(todo.title);
        };
    };

    return (
        <ListItem style={styles}>
            <Grid container
                direction='row'
                alignItems='center'>
                <Grid item xs={1}>
                    <Checkbox
                        onChange={() => handleCheck(todo.id)}
                        checked={todo.completed}
                        color='primary' icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                    />
                </Grid>
                <Grid item xs={8}>
                    {toggleInput
                        ? <TextField 
                            multiline={true}
                            value={inpitValue}
                            fullWidth
                            variant='outlined'
                            autoFocus={true}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={e => handleKeyDown(todo.id, e)} />
                        : <ListItemText primary={inpitValue}
                            onClick={() => setToggleInput(true)} />}
                </Grid>
                <Grid item xs={2}>
                    <ListItemText primary={time} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => handleDelete(todo.id)} >
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};