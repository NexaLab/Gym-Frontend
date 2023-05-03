import React, { useEffect } from 'react'
import "./Messages.css"
import { Layout, Typography, Input } from 'antd'
import Person from "../../assets/Person.jpg";
import { SendOutlined } from '@ant-design/icons';
import io from "socket.io-client";




const { Title } = Typography;
const { Text } = Typography;




const socket = io("http://localhost:3001");






function Messages() {






    const joinRoom = async () => {
        console.log("room joined")
        socket.emit("join-room", 1);


    }







    const sendMessage = () => {
        console.log("click")
        socket.emit("send-message", { message: "Hello", room: 1 });




    }






    const receiveMessage = () => {
        socket.off("receive-message").on("receive-message", (data) => {
            console.log(data);

        }, [socket]);
    }







    useEffect(() => {

        joinRoom();
        receiveMessage();
    })






    return (
        <Layout id='messages-layout'>


            <div id='message-receiver-heading-container'>
                <img src={Person} alt="" id='message-receiver-image' />
                <div id='message-receiver-name-and-active-status-container'>
                    <h4 id='message-receiver-name'>Abdur Rafay</h4>
                    <h6>Active Now</h6>
                </div>
            </div>


            <div id='messages-container'>

                <div className='outgoing-messages'>
                    yes
                </div>

                <div className='incoming-messages'>
                    yes
                </div>
            </div>


            <div id='messages-input-container'>
                <Input id='type-messages' placeholder='Type Something' autoFocus={true} />
                <SendOutlined id='send-btn' onClick={sendMessage} />
            </div>


        </Layout>
    )
}

export default Messages