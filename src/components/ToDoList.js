import { List } from '@material-ui/core';
import React from 'react';
import { ToDoLIstItem } from './ToDoListItem';

export const ToDoList = ({ todos, handleTodoDelete, handleTodoChange }) => {
    return (
        <List>
            {todos.map((todo) => (
                <ToDoLIstItem
                    key={todo.uuid}
                    todo={todo}
                    handleTodoDelete={handleTodoDelete}
                    handleTodoChange={handleTodoChange}
                />
            ))}
        </List>
    );
};