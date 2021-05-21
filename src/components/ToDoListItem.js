import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const ToDoLIstItem = ({ todo, handlDelete, handleCheck}) =>{   

    const time = new Date(todo.id).toLocaleString().match(/\d+.\d+.\d{4}/s)[0] 
    return(
        <ListItem> 
            <Checkbox
                onChange={() => handleCheck(todo.id)} 
                checked={todo.completed} 
                color='primary' icon={<CheckCircleOutlineIcon  />} 
                checkedIcon={<CheckCircleIcon />}
            />

            <ListItemText primary={todo.title}/>
            <ListItemText primary={time}/>
            <ListItemSecondaryAction>
                <IconButton onClick={()=>handlDelete(todo.id)} >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}