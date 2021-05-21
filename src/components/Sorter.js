import { Button, ButtonGroup, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const Sorter = () =>{
    return(
        <Grid container direction='row'
              alignItems='center'
              spacing={2}
              justify='space-between'>
            <Grid item spacing={1}>
            <ButtonGroup >
                <Button color='primary'variant="" >All</Button>
                <Button color='primary'>Done </Button>
                <Button color='primary'>Undone</Button>
            </ButtonGroup>            
            </Grid>
            <Grid item spacing={1} >
                <Grid container 
                      direction='row'
                      alignItems='center'
                      >
                <Typography margin='normal'>Sort by Date</Typography>
            <ButtonGroup>
                <IconButton color='primary'>
                    <ArrowUpwardIcon />
                </IconButton>
                <IconButton>
                    <ArrowDownwardIcon />
                </IconButton>
            </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    )
}