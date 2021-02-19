import React from "react"
import { ButtonGroup, Button } from '@material-ui/core'

const Buttons = (props) => {
    return (
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
        >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
};

export default Buttons;
