import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import {connect} from "react-redux";
import {IconAdd} from "@consta/uikit/IconAdd";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@consta/uikit/Avatar';
import {ListItemButton} from "@mui/material";
import { addChat } from './actions/chatAction';
import {bindActionCreators} from "redux";
class ChatList extends React.Component {
    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    };
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText primary={chats[chatId].title} />
                        </ListItemButton>
                </ListItem>
            </Link>));
        return (
            <div className='block'>
                <List>
                    { chatElements }
                </List>
                <div className='addChat'>
                <input
                    name="input"
                    placeholder="добавьте чат"
                    style={ { padding:'0', fontSize: '14.8px' ,background:'gray',} }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />
                <button
                    style={ {   border:'0px',backgroundColor:'gray'} }
                    onClick={this.handleAddChat}
                >
                    <IconAdd
                        size='s'
                        view='primary'
                    />
                </button>
                </div>
            </div>
        )

    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat },
    dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);