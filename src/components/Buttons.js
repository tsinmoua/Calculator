import React from "react"
import { ButtonGroup, Button, makeStyles } from '@material-ui/core'

const Buttons = (props) => {

    const useStyles = makeStyles({
        buttons: {
            width: '5rem',
            height: '5rem',
            padding: '1rem',
            borderRadius: 0
        }
    })

    const classes = useStyles();

    return (
        <React.Fragment>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
                <Button className={classes.buttons}>One</Button>
            </ButtonGroup>
        </React.Fragment>
    )
};

export default Buttons;
