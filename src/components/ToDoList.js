import { Checkbox, FormControlLabel, FormGroup, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';

import React from 'react';

export const ToDoList = ({todos}) => {
    return (
       <List>
           {todos.map(({id, title, completed}) => (
        
            <ListItem key={id}>
                <Checkbox checked={completed} color='primary' icon={<CheckCircleOutlineIcon  />} checkedIcon={<CheckCircleIcon />}/>
                <ListItemText primary={title}/>
                <ListItemSecondaryAction>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
           )

           )}
       </List>
    );
};