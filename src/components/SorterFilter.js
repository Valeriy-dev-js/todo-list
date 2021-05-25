import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { FilterButtons } from "./FilterButtons";
import { SortButtons } from "./SortButtons";

export const SorterFilter = ( { sorterFilter, setSorterFilter, setCurrentPage }) => {

    const handleSorter = (type) => {
        setSorterFilter(prev => ({...prev, sorterType: type}));
        setCurrentPage(1);
    };

    const handleFilter = (type) => {
        setSorterFilter({sorterType: true, filterType: type});
        setCurrentPage(1);
    };


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
    );
};