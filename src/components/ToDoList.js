import {  List } from '@material-ui/core';
import React from 'react';
import { ToDoLIstItem } from './ToDoListItem';

export const ToDoList = ({todos, handlDelete, handleCheck}) => {            
    return (
       <List>
           {todos.map((todo, index) => (
               <ToDoLIstItem
                    id={index} 
                    key={todo.id} 
                    todo={todo}
                    handlDelete={handlDelete} 
                    handleCheck={handleCheck}
               />
            ))}
       </List>
    );
};