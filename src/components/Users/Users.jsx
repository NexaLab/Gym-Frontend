import React from 'react'
import "./Users.css"
import { Input, Layout, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Person from "../../assets/Person.jpg";





const { Title } = Typography;
const { Text } = Typography;





function Users() {
    return (
        <Layout id='users-layout'>


            <div id='users-layout-chat-heading-container'>
                <Title level={3} id='user-admin-chats-heading'>Chats</Title>
            </div>


            <div id='chat-search' >
                <SearchOutlined />
                <input placeholder='Search' id='search-input' />
            </div>


            <div className='user-data-container'>
                <img src={Person} alt="" className='user-image' />
                <Text className='user-name'>Abdur Rafay</Text>
            </div>


            <div className='user-data-container'>
                <img src={Person} alt="" className='user-image' />
                <Text className='user-name'>Abdur Rafay</Text>
            </div>


        </Layout>
    )
}

export default Users