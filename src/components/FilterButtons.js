import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';

export const FilterButtons = ({ handleFilter, filterType }) => {


    const buttons = ['All', 'Done', 'Undone']

    return (
        <ButtonGroup >
            {buttons.map((button, index) => (
                <Button color='primary'
                    key={button}
                    variant={button === filterType && 'contained'}
                    onClick={() => {
                        if (filterType !== buttons[index]) {
                            return handleFilter(buttons[index])
                        }
                    }}>{button}</Button>
            ))}
        </ButtonGroup>
    )
}