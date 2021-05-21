import { IconButton } from '@material-ui/core';
import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const SortButtons = ({ sorter, handleSort }) => {
    return (
        <>
            <IconButton color={sorter ? 'primary' : 'default'}
                onClick={() => handleSort(true)}>
                <ArrowUpwardIcon />
            </IconButton>
            <IconButton color={!sorter ? 'primary' : 'default'}
                onClick={() => handleSort(false)}>
                <ArrowDownwardIcon />
            </IconButton>
        </>
    )
}