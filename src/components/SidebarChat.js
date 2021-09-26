import { Avatar } from '@mui/material';
import React,{useState,useEffect} from 'react'
import "./Sidebar.css";

const SidebarChat = ()=> {

    const [seed, setSeed] = useState('')


    useEffect(() => {
        
       setSeed(Math.floor(Math.random()*1000));
    }, [])


    return (
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/personas/${seed}.svg`}
        />
        <div className="sidebar__info">
          <h2>Juan</h2>
          <p>Last message..</p>
        </div>
      </div>
    );
}

export default SidebarChat
