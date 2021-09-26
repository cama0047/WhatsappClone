import { Chat, DonutLarge, MoreVert } from "@material-ui/icons";
import { Avatar } from "@mui/material";

import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__headerRight">
          <DonutLarge />
          <Chat />
          <MoreVert />
        </div>
      </div>

      <div className="sidebar__search"></div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
