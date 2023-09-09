import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    };

    static propTypes = {
        onSend: PropTypes.func,
        test: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onSend: () => {},
        test: 10,
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleInputSend = (event) => {
        const {onSend} = this.props;

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }
    }

    render()
    {
        console.log(this.props);
        const {author, text} = this.state;
        return (
            <div>
                {/*<input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="Author"/><br/>*/}
                <textarea name="text"
                          onChange={this.handleInputChange}
                          placeholder="Text"
                          value={ this.state.input }
                /><br/>
                <button onClick={this.handleInputSend}>Send message</button>
            </div>
        );
    }

}