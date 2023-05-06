import React from "react";
import "./Users.css";
import { Layout, Typography, Progress } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Person from "../../assets/Person.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllClients } from "../../services/ClientSlice";
import { getPrivateRoomOfUser } from "../../services/PrivateRoomSlice";
import { updateSenderAndReceiverData } from "../../services/SenderAndReceiverSlice";
import { memo } from "react";



const { Title } = Typography;
const { Text } = Typography;





function Users() {


  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clientSlice);





  const email = localStorage.getItem("email")





  const getPrivateRoom = async (client) => {


    const data = {
      clickByUserEmail: email,
      clickOnUserEmail: client.email
    }


    dispatch(getPrivateRoomOfUser(data));
    dispatch(updateSenderAndReceiverData({


      messageSender: email,
      messageReceiver: client.email,
      messageReceiverName: client.first_name + " " + client.last_name

    }));

  }








  useEffect(() => {
    dispatch(getAllClients());
  }, []);







  return (
    <Layout id="users-layout">
      <div id="users-layout-chat-heading-container">
        <Title level={3} id="user-admin-chats-heading">
          Chats
        </Title>
      </div>

      <div id="chat-search">
        <SearchOutlined />
        <input placeholder="Search" id="search-input" />
      </div>

      {


        clients.isLoader === true ?
          <Progress type="dashboard" percent={50} size={20} className='progress-animation' />
          :
          clients.data &&
          clients.data.map((client) => {
            return (
              <div className="user-data-container" key={client.id} onClick={() => getPrivateRoom(client)}>
                <img src={Person} alt="" className="user-image" />
                <Text className="user-name">{client.first_name}</Text>
              </div>
            );
          })


      }
    </Layout>
  );
}

export default memo(Users);
