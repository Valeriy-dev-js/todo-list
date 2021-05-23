import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FilterButtons } from "./FilterButtons";
import { SortButtons } from "./SortButtons";

export const SorterFilter = ( {filterSorter, sorterFilter, setSorterFilter}) => {
    // const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' })

    const handleSorter = (type) => {
        setSorterFilter(prev => ({...prev, sorterType: type}))
    }

    const handleFilter = (type) => setSorterFilter(prev => ({...prev, filterType: type}))


    return (
        <Grid container
            direction='row'
            alignItems='center'
            justify='space-between'>
            <Grid >
                <FilterButtons handleFilter={handleFilter}
                               filterType={sorterFilter.filterType} />
            </Grid>
            <Grid >
                <Grid container
                    direction='row'
                    alignItems='center'
                >
                    <Typography>Sort by Date</Typography>
                    <SortButtons handleSorter={handleSorter}
                                 sorterType={sorterFilter.sorterType} />
                </Grid>
            </Grid>
        </Grid>
    )
}