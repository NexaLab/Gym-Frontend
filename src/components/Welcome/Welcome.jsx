import React from 'react'
import {Layout, Typography} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons';
import "./Welcome.css"

const {Header, Content} = Layout;
const {Text} = Typography;

function Welcome() {
  return (
    <Layout className='welcome-main'>
      <Header className='header-welcome'>Dashboard <ArrowRightOutlined style={{marginLeft: 10}}/> </Header>
      <Content className='content-welcome'>
        <Text style={{fontSize: 25}}>Welcome</Text>    
        <Text style={{fontSize: 55}}>Admin</Text>    
      </Content>
    </Layout>    
    )
}

export default Welcome