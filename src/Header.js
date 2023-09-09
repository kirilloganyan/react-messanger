import React from 'react';
import PropTypes from "prop-types";
import {IconUser} from "@consta/uikit/IconUser";
import {Link} from "react-router-dom";
import './style.css'
import {IconClose} from "@consta/uikit/IconClose";
import {useSelector} from "react-redux";
function Header (props){
    const nick = useSelector(state => state.chatReducer.user.username)
        return (
            <div className="header" >
                <span style={ { fontSize: '20px' } }>Чат { props.chatId}</span>
                <div className='pprofile'>

                    <Link to='/' style={{padding:'10px 5px'}}>
                        <IconClose  view="primary"/>
                    </Link>
                </div>
                <div style={{display:"flex"}}>
                    <h3>{nick}</h3>
                    <Link to='/profile'>
                        <IconUser
                            size='m'
                            view="primary"
                        />
                    </Link>
                </div>
            </div>
        )
    }

export default (Header);