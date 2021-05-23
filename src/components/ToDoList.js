import {  List } from '@material-ui/core';
import React from 'react';
import { ToDoLIstItem } from './ToDoListItem';

export const ToDoList = ({todos, handleDelete, handleCheck}) => {            
    return (
       <List>
           {todos.map((todo) => (
               <ToDoLIstItem 
                    key={todo.id} 
                    todo={todo}
                    handleDelete={handleDelete} 
                    handleCheck={handleCheck}
               />
            ))}
       </List>
    );
};