import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const Header = ({ title }) => {

    const useStyles = makeStyles({
        title: {
            padding: '5rem 0',
            fontWeight: 'bolder',
            color: 'navy'
        }
    })

    const classes = useStyles();

    return (
        <div>
            <Typography
                variant='h1'
                align='center'
                className={classes.title}
            >
                {title}
            </Typography>
        </div>
    )
};

export default Header;
