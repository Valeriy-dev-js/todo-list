import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';

export const FilterButtons = ({ filter , handleClick }) => {
    return(
        <ButtonGroup >
            {filter.map(button =>(
            <Button color='primary' 
                    key={button.title}
                    variant='contained'
                    onClick={() => handleClick(button)}>{button.title}</Button>
            ))}
        </ButtonGroup>  
    )
}