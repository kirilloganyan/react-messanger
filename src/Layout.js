import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import './style.css';
import {Flex} from "@react-css/flex";
import { sendMessage } from "./actions/messageActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };
    static defaultProps = {
        chatId: 1,
        sendMessage: PropTypes.func.isRequired,
    };
    state = {
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        },
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length
            &&
            Object.values(messages)[Object.values(messages).length - 1].sender
            === 'me') {
                this.sendMessage('Не приставай ко мне, я робот!', 'bot');
        }
    }
    sendMessage = (message, sender) => {
        const { messages } = this.state;
        const { chatId } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},
        });
        this.props.sendMessage(messageId, message, sender, chatId);
    };
    render() {
        return (
            <>
                <Flex>
                    <Header chatId={ this.props.chatId }/>
                </Flex>
                <Flex>
                    <ChatList
                    />
                    <MessageField
                        chatId={ this.props.chatId }
                        messages={ this.state.messages }
                        sendMessage={ this.sendMessage } />
                </Flex>
            </>
        )
    }
}
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage },
    dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Layout);