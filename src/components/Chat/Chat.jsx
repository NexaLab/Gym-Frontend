import React, { memo } from "react";
import "./Chat.css";
import { Layout } from "antd";
import Users from "../Users/Users";
import Messages from "../Messages/Messages";

function Chat() {
  return (
    <div id="chat-layout">
      <Users />
      <Messages />
    </div>
  );
}

export default memo(Chat);
