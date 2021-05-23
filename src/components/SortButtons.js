import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const SortButtons = ({ Sorter }) => {

    const [sorter, setSorter] = useState(true)

    const hanbleButton = (type) => {
        if(type !== sorter){
            Sorter(type)
            setSorter(!sorter)
        }
    }

    return (
        <>
            <IconButton color={sorter ? 'primary' : 'default'}
                onClick={() => hanbleButton(true)}>
                <ArrowUpwardIcon />
            </IconButton>
            <IconButton color={!sorter ? 'primary' : 'default'}
                onClick={() => hanbleButton(false)}>
                <ArrowDownwardIcon />
            </IconButton>
        </>
    )
}