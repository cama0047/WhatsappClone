import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import db from '../Firebase'
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
  // Seed will have a random number
  const [seed, setSeed] = useState("");

  useEffect(() => {
    //Set the seed to a random number and without decimals
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter a name for the new chat ");
    
    if (roomName) {
  
      // Hint: Create chat
      db.collection("rooms").add({
        name: roomName,
      })

    }
  };
/* displayed to the user  */

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/personas/${seed}.svg`} />
      <div className="sidebar__info">
        <h2>{name}</h2>
        <p>Last message..</p>
      </div>
    </div>
    </Link>
  ) : (

    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
