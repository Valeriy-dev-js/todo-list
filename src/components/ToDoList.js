import { List } from '@material-ui/core';
import React from 'react';
import { ToDoLIstItem } from './ToDoListItem';

export const ToDoList = ({ todos, handleDelete, handleCheck, handleTodoChange }) => {
    return (
        <List>
            {todos.map((todo) => (
                <ToDoLIstItem
                    key={todo.uuid}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    handleTodoChange={handleTodoChange}
                />
            ))}
        </List>
    );
};