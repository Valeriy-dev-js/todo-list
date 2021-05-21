import { ButtonGroup, Grid, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { FilterButtons } from "./FilterButtons";

export const Sorter = () =>{
    const filterButtons = [{title: 'All', toggle: true},
                           {title: 'Done', toggle: false},
                           {title: 'Undone', toggle: false}];
    const [filter, setFilter] = useState(filterButtons)

    const handleClick = (button) => {
        console.log(button)
        // setFilter(prev => prev.map(button => 
        //     button.title === title
        //     ? {title: button.title, toggle: !button.toggle}
        //     : button
        //     ))
    };

    // const handleClick = (title) => {
    //     setFilter(prev => prev.map(button => {title: button.title, toggle: !button.toggle}))
    // };

    return(
        <Grid container
              direction='row'
              alignItems='center'
              justify='space-between'>
            <Grid >
                <FilterButtons filter={filter}
                               handleClick={handleClick}/>     
            </Grid>
            <Grid >
                <Grid container
                      direction='row'
                      alignItems='center'
                      >
                    <Typography>Sort by Date</Typography>
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