import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";

export const Sorter = () =>{
    return(
        <div className='Sorter'>        
        <ButtonGroup>
            <Button>All</Button>
            <Button>Done</Button>
            <Button>Undone</Button>
        </ButtonGroup>
                
        </div>
    )
}