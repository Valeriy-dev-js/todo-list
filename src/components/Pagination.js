import { Button, ButtonGroup, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';

export const Pagination = () => {
    return(
        <ButtonGroup fullWidth >
            <Button >
                <ArrowBackIosIcon />
            </Button>
            <Button>1</Button>
            <Button>
                <ArrowForwardIosIcon />
            </Button>
        </ButtonGroup >
    )
}