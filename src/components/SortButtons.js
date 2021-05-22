import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const SortButtons = ({ handleSorter }) => {

    const [sorter, setSorter] = useState([true, false])

    const hanbleButton = ([type, value]) => {
        if (!type) {
            setSorter(prev => prev.reverse())
            handleSorter(value)
        }
    }

    return (
        <>
            <IconButton color={sorter[0] ? 'primary' : 'default'}
                onClick={() => hanbleButton([sorter[0], 'new'])}>
                <ArrowUpwardIcon />
            </IconButton>
            <IconButton color={sorter[1] ? 'primary' : 'default'}
                onClick={() => hanbleButton([sorter[1], 'old'])}>
                <ArrowDownwardIcon />
            </IconButton>
        </>
    )
}