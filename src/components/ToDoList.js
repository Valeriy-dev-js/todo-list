import { List } from '@material-ui/core';
import React from 'react';
import { ToDoLIstItem } from './ToDoListItem';

export const ToDoList = ({ todos, handleDelete, handleTodoChange }) => {
    return (
        <List>
            {todos.map((todo) => (
                <ToDoLIstItem
                    key={todo.uuid}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleTodoChange={handleTodoChange}
                />
            ))}
        </List>
    );
};