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

export const ToDoLIstItem = ({ todo, handleTodoDelete, handleTodoChange }) => {
    const time = todo.createdAt.match(/\d+.\d+.\d+/s)[0];
    const [toggleInput, setToggleInput] = useState(false);
    const [task, setTask] = useState(todo);
    const [disbled, setDisabled] = useState(false);

    const handleKeyDown = async (todo, e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleTodoChange(task);
            setToggleInput(false);
        };
        if (e.key === 'Escape') {
            setToggleInput(false);
            setTask({ ...task, name: todo.name });
        };
    };
    const handleCheck = () => {
        const newTask = { ...task, done: !task.done };
        setTask(newTask);
        handleTodoChange(newTask);
    };
    const handleDelete = () => {
        setDisabled(true)
        handleTodoDelete(todo)
    }
    return (
        <ListItem style={styles}>
            <Grid container
                direction='row'
                alignItems='center'>
                <Grid item xs={1}>
                    <Checkbox
                        onChange={() => handleCheck()}
                        checked={task.done}
                        color='primary'
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                    />
                </Grid>
                <Grid item xs={8}>
                    {toggleInput
                        ? <TextField
                            multiline={true}
                            value={task.name}
                            fullWidth
                            variant='outlined'
                            autoFocus={true}
                            onChange={e => setTask({ ...task, name: e.target.value })}
                            onKeyDown={e => handleKeyDown(todo, e)} />
                        : <ListItemText primary={todo.name}
                            style={{ overflowWrap: 'break-word' }}
                            multiline='true'
                            onClick={() => setToggleInput(true)} />}
                </Grid>
                <Grid item xs={2}>
                    <ListItemText primary={time} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        disabled={disbled}
                        onClick={() => handleDelete()}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};

