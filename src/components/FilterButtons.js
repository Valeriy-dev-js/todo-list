import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';

export const FilterButtons = ({ handleFilter }) => {
    const filterButtons = [{ title: 'All', selected: true },
    { title: 'Done', selected: false },
    { title: 'Undone', selected: false }];

    const [filter, setFilter] = useState(filterButtons)

    const handleButton = (button) => {
        if (!button.selected) {
            setFilter(prev => {
                handleFilter(button.title)
                return prev.map(item =>
                    button.title === item.title
                        ? { title: item.title, selected: !item.selected }
                        : { title: item.title, selected: false }
                )
            })
        }
    };

    return (
        <ButtonGroup >
            {filter.map(button => (
                <Button color='primary'
                    key={button.title}
                    variant={button.selected && 'contained'}
                    onClick={() => handleButton(button)}>{button.title}</Button>
            ))}
        </ButtonGroup>
    )
}