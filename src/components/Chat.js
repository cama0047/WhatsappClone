import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../Firebase";
import "./Chat.css";

function Chat() {
  // Seed will have a random number
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState(""); //<-- Rooms
  const [messages, setMessages] = useState([]); //<-- Messages

  // Every time that roomId changes, we are gping to call a function to get new messagest to that roomId
  useEffect(() => {
    if (roomId) {
      //geting the room names and saving them in setRoomName
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      //getting the messages from a room
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("sending message....", input); // <----PRINT

    setInput(""); //<-- Clean the input
  };

  useEffect(() => {
    //Set the seed to a random number and without decimals
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/personas/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
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
        {messages.map((message) => (
          <p className={`chat__message ${true && "chat__reciever"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date (message.timestamp?.toDate()).toUTCString()}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
