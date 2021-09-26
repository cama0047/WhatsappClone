import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  // Seed will have a random number
  const [seed, setSeed] = useState("");

  useEffect(() => {
    //Set the seed to a random number and without decimals
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter a name for the new chat ");
    console.log("please create ", roomName); // <----PRINT
    if (roomName) {
      //do something
      // Hint: Create chat

    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/personas/${seed}.svg`} />
      <div className="sidebar__info">
        <h2>Silvi</h2>
        <p>Last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
