import { Checkbox, Grid, IconButton, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';



export const ToDoLIstItem = ({ todo, handleDelete, handleCheck}) =>{   
    const time = new Date(todo.id).toLocaleString().match(/\d+.\d+.\d{4}/s)[0] 
    return(
        <ListItem> 
            <Grid container
                  direction='row'
                  alignItems='center'
                  spacing={1}>
                <Grid item xs={1}>
                    <Checkbox
                        onChange={() => handleCheck(todo.id)} 
                        checked={todo.completed} 
                        color='primary' icon={<RadioButtonUncheckedIcon  />} 
                        checkedIcon={<CheckCircleIcon />}
                    />
                </Grid>
                <Grid item xs={8}>
                    <ListItemText primary={todo.title}/>
                </Grid>
                <Grid item xs={2}>
                    <ListItemText primary={time} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={()=>handleDelete(todo.id)} >
                        <DeleteIcon />
                    </IconButton>                
                </Grid>                    
            </Grid>
        </ListItem>
    )
}