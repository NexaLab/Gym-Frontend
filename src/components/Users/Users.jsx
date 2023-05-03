import React from "react";
import "./Users.css";
import { Layout, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Person from "../../assets/Person.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllClients } from "../../services/ClientSlice";

const { Title } = Typography;
const { Text } = Typography;

function Users() {
  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.clientSlice);

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

      {clientState.data &&
        clientState.data.map((client) => {
          return (
            <div className="user-data-container" key={client.id}>
              <img src={Person} alt="" className="user-image" />
              <Text className="user-name">{client.first_name}</Text>
            </div>
          );
        })}
    </Layout>
  );
}

export default Users;
