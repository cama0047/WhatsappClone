import { Avatar } from '@mui/material';
import React,{useState,useEffect} from 'react'
import "./SidebarChat.css";

const SidebarChat = ()=> {
    // Seed will have a random number
    const [seed, setSeed] = useState('') 


    useEffect(() => {
        //Set the seed to a random number and without decimals 
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
