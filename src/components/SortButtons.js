import { IconButton } from '@material-ui/core';
import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const SortButtons = () =>{
    return (
        <>
        <IconButton color='primary'>
            <ArrowUpwardIcon />
        </IconButton>
        <IconButton>
            <ArrowDownwardIcon />
        </IconButton>
        </>     
    )
}