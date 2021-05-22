import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FilterButtons } from "./FilterButtons";
import { SortButtons } from "./SortButtons";

export const SorterFilter = () => {



    const [sorterFilter, setSorterFilter] = useState({ sorterType: 'new', filterType: 'All' })
    console.log(sorterFilter)
    const handleSorter = (type) => {
        setSorterFilter(prev => { return { ...prev, sorterType: type } })
    }

    const handleFilter = (type) => {
        setSorterFilter(prev => { return { ...prev, filterType: type } })
    }



    return (
        <Grid container
            direction='row'
            alignItems='center'
            justify='space-between'>
            <Grid >
                <FilterButtons handleFilter={handleFilter} />
            </Grid>
            <Grid >
                <Grid container
                    direction='row'
                    alignItems='center'
                >
                    <Typography>Sort by Date</Typography>
                    <SortButtons handleSorter={handleSorter} />
                </Grid>
            </Grid>
        </Grid>
    )
}