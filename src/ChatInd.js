import React, {Component} from 'react';
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import {ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Avatar} from "@consta/uikit/Avatar";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

class ChatInd extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div>
                <ListItem>
                    <Link to={`/chat/${this.props.chatId}`}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText primary={`Chat ${this.props.chatId}`} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </div>
        );
    }
}

export default ChatInd;