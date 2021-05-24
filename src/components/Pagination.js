import { Button, ButtonGroup, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';

export const Pagination = ({ totalPosts, postsPerPage , currentPage, setCurrentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <Grid container>
            <Button 
                color='primary'
                onClick={() => setCurrentPage(1)}>
                <ArrowBackIosIcon />
                <ArrowBackIosIcon />
            </Button>
                <Grid item xs={9}>
                    <ButtonGroup fullWidth>
                    {pageNumbers.map(number => (
                <Button 
                    color='primary'
                    key={number} 
                    variant={number === currentPage && 'contained'}
                    onClick={() => setCurrentPage(number)}>
                    {number}
                </Button>
            ))}
                    </ButtonGroup>

                </Grid>
            
            <Button 
                color='primary'
                onClick={() => setCurrentPage(pageNumbers.length)}>
                <ArrowForwardIosIcon />
                <ArrowForwardIosIcon />
            </Button>
        </Grid>
    );
};