import { Grid, Typography } from "@material-ui/core";
import React, {  useRef } from "react";
import { FilterButtons } from "./FilterButtons";
import { SortButtons } from "./SortButtons";

export const SorterFilter = ({ handleSorter , handleFilter }) => {
    const sorterFilter = useRef({ sorterType: true, filterType: 'All' })

    const Sorter = (type) => {
        sorterFilter.current.sorterType = type
        handleSorter() 
    }

    const Filter = (type) => {
        sorterFilter.current.filterType = type
        handleFilter(sorterFilter) 

    }


    return (
        <Grid container
            direction='row'
            alignItems='center'
            justify='space-between'>
            <Grid >
                <FilterButtons Filter={Filter} />
            </Grid>
            <Grid >
                <Grid container
                    direction='row'
                    alignItems='center'
                >
                    <Typography>Sort by Date</Typography>
                    <SortButtons Sorter={Sorter} />
                </Grid>
            </Grid>
        </Grid>
    )
}