import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";

const SidebarChat = ()=> {



    return (
        
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebar__info">
                <h2>Room name</h2>
                <p>Last message..</p>
            </div>
        </div>
        
    )
}

export default SidebarChat
