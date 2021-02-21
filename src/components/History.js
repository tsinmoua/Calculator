import React from "react"
import { Divider, List, ListItem, ListItemText } from "@material-ui/core"

const History = ({ list }) => {
    return (
        <List component="nav" aria-label="mailbox folders">
            {list.map((item, index) => {
                return (
                    <React.Fragment>
                        <ListItem key={index}>
                            <ListItemText primary={item} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            })}
            {/* <ListItem >
                <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem divider>
                <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem >
                <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem >
                <ListItemText primary="Spam" />
            </ListItem> */}
        </List>
    )
};

export default History;
