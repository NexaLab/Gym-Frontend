import React, { useEffect } from 'react'
import { Layout, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import "./Welcome.css"
import CustomSideBar from "../Sidebar/CustomSideBar";
import { useHistory } from 'react-router-dom';





const { Header, Content } = Layout;
const { Text } = Typography;





function Welcome() {


  const history = useHistory();



  useEffect(() => {

    if (!(localStorage.getItem("jwt") && localStorage.getItem("email"))) {

      history.push("/login");

    }



  }, [])


  return (
    <Layout id='home-component-with-sidebar'>
      <CustomSideBar />
      <Layout className='welcome-main'>
        <Header className='header-welcome'>Dashboard <ArrowRightOutlined style={{ marginLeft: 10 }} /> </Header>
        <Content className='content-welcome'>
          <Text style={{ fontSize: 25 }}>Welcome</Text>
          <Text style={{ fontSize: 55 }}>Admin</Text>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Welcome