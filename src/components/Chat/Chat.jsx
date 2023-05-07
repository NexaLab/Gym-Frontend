import React, { memo, useEffect } from "react";
import "./Chat.css";
import { Layout } from "antd";
import Users from "../Users/Users";
import Messages from "../Messages/Messages";
import { useHistory } from "react-router-dom";

function Chat() {




  const history = useHistory();




  useEffect(() => {

    if (!(localStorage.getItem("jwt") && localStorage.getItem("email"))) {

      history.push("/login");

    }





  }, [])



  return (
    <div id="chat-layout">
      <Users />
      <Messages />
    </div>
  );
}

export default memo(Chat);
