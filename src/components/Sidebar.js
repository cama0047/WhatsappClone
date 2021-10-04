import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";

import React, {useState, useEffect} from "react";
import db from "../Firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";


function Sidebar() {

const [rooms, setRooms] = useState([])
  
  
  useEffect(() => {
    //Getting the rooms in firebase
    const unsubscribe = db.collection("rooms").onSnapshot(
      (snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        ),
      (error) => {
        // ... Houston we have a problem
        console.log("error line 27 ", error); // <----PRINT
      }
    );
    
      return () => {
        unsubscribe(); //<---- Release
      }

  }, [])


  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat " type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <h1>{rooms.data}</h1>
        <SidebarChat addNewChat />
        {rooms.map(room =>(
          <SidebarChat key={room.id} id={room.id} name={room.data.name}/>

        ))}
        
      </div>
    </div>
  );
}

export default Sidebar;
