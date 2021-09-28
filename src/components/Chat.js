import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  // Seed will have a random number
  const [seed, setSeed] = useState("");

  useEffect(() => {
    //Set the seed to a random number and without decimals
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/personas/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>nombre Chat</h3>
          <p>Chisme.....blabla</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          Hi guys
        </p>
      </div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
