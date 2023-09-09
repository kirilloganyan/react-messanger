import React from 'react';
import {IconClose} from "@consta/uikit/IconClose";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Profile (){
    const nick = useSelector(state => state.chatReducer.user.username)
        return (
            <div style={{display:"flex"}}>
                <h1>Это профиль {nick}</h1>
                <Link to='/' style={{padding:'10px 5px'}}>
                    <IconClose  view="primary"/>
                </Link>

            </div>
        );

}

export default Profile;