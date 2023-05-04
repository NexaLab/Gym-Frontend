import React, { memo, useEffect, useState } from 'react'
import "./Messages.css";
import { Layout, Typography, Input } from 'antd'
import Person from "../../assets/Person.jpg";
import { SendOutlined } from '@ant-design/icons';
import io from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux';
import { updateMessages } from '../../services/MessageSlice';



const { Title } = Typography;
const { Text } = Typography;




const socket = io("http://localhost:3001");






function Messages() {


    const dispatch = useDispatch();
    const privateRoomOfUser = useSelector(state => state.privateRoomSlice);
    const senderAndReceiver = useSelector(state => state.senderAndReceiverSlice);
    const messages = useSelector(state => state.messageSlice);







    const [arrivalMessage, setArrivalMessage] = useState(null);




    const joinRoom = async () => {


        if (Object.keys(privateRoomOfUser.data).length != 0) {
            socket.emit("join-room", privateRoomOfUser.data.id);
        }


    }






    const sendMessage = async () => {

        socket.emit("send-message", { message: "Hello", room: privateRoomOfUser.data.id, messageSender: senderAndReceiver.data.messageSender, messageReceiver: senderAndReceiver.data.messageReceiver });
        dispatch(updateMessages({
            email: senderAndReceiver.data.messageSender,
            message: "Hello"
        }))





    }






    const receiveMessage = () => {
        socket.off("receive-message").on("receive-message", (data) => {
            setArrivalMessage({
                email: senderAndReceiver.data.messageReceiver, message: data.message
            });
        }, [socket]);
    }







    useEffect(() => {

        joinRoom();
        receiveMessage();
    }, [privateRoomOfUser.data]);







    useEffect(() => {


        arrivalMessage && dispatch(updateMessages(arrivalMessage));


    }, [arrivalMessage]);





    // useEffect(() => {

    // }, [messages])






    return (
        <Layout id='messages-layout'>


            <div id='message-receiver-heading-container'>
                <img src={Person} alt="" id='message-receiver-image' />
                <div id='message-receiver-name-and-active-status-container'>
                    <h4 id='message-receiver-name'>{senderAndReceiver.data.messageReceiverName}</h4>
                    <h6>Active Now</h6>
                </div>
            </div>


            <div id='messages-container'>

                {
                    messages.data && messages.data.map((m, i) => m.email === senderAndReceiver.data.messageSender ? <div className='outgoing-messages' key={i}>{m.message}</div> : <div className='incoming-messages' key={i}>{m.message}</div>)
                }


            </div>


            <div id='messages-input-container'>
                <Input id='type-messages' placeholder='Type Something' autoFocus={true} />
                <SendOutlined id='send-btn' onClick={sendMessage} />
            </div>


        </Layout>
    )
}

export default memo(Messages)