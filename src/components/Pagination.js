import { Button, ButtonGroup, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useRef } from 'react';

export const Pagination = () => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }

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