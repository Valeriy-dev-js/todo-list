import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';

export const FilterButtons = ({ filter , handleFilter }) => {
    return(
        <ButtonGroup >
            {filter.map(button =>(
            <Button color='primary' 
                    key={button.title}
                    variant={button.toggle && 'contained'}
                    onClick={() => handleFilter(button)}>{button.title}</Button>
            ))}
        </ButtonGroup>  
    )
}