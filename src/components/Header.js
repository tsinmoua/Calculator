import React from "react"
import { Typography } from "@material-ui/core"

const Header = ({ title }) => {
    return (
        <div>
            <Typography variant='h1'>
                {title}
            </Typography>
        </div>
    )
};

export default Header;
