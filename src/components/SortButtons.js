import { IconButton } from '@material-ui/core';
import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const SortButtons = ({ handleSorter , sorterType}) => {
    const handleButton = (type) => {
        if(type !== sorterType){
            handleSorter(type);
        }   ;
    };

    return (
        <>
            <IconButton color={sorterType ? 'primary' : 'default'}
                onClick={() => handleButton(true)}>
                <ArrowUpwardIcon />
            </IconButton>
            <IconButton color={!sorterType ? 'primary' : 'default'}
                onClick={() => handleButton(false)}>
                <ArrowDownwardIcon />
            </IconButton>
        </>
    );
};