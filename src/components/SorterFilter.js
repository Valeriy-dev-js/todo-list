import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FilterButtons } from "./FilterButtons";
import { SortButtons } from "./SortButtons";

export const SorterFilter = () =>{
    const filterButtons = [{title: 'All', toggle: true},
                           {title: 'Done', toggle: false},
                           {title: 'Undone', toggle: false}];


    const [sorter, setSorter] = useState(true)
    const [filter, setFilter] = useState(filterButtons)

    const handleSort = (a) =>{
        if(a !== sorter){
            setSorter(prev => !prev)
        }
    }
    
    const handleFilter = (button) => {
        if(!button.toggle){
            setFilter(prev => prev.map(item => 
                button.title === item.title
                ? {title: item.title, toggle: !item.toggle}
                : {title: item.title, toggle: false}
            ))
        }
    };

    return(
        <Grid container
              direction='row'
              alignItems='center'
              justify='space-between'>
            <Grid >
                <FilterButtons filter={filter}
                               handleFilter={handleFilter}/>     
            </Grid>
            <Grid >
                <Grid container
                      direction='row'
                      alignItems='center'
                      >
                    <Typography>Sort by Date</Typography>
                    <SortButtons sorter={sorter}
                                 handleSort={handleSort}/>
                </Grid>
            </Grid>
        </Grid>
    )
}