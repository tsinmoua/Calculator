import React from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"

const History = ({ list }) => {
    return (
        <List component="nav">
            {list.slice(0, 11).map((item, index) => {
                return (
                    <ListItem divider key={index}>
                        <ListItemText primary={item} />
                    </ListItem>
                )
            })}
        </List>
    )
};

export default History;
