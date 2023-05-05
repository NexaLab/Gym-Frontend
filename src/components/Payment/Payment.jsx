import React from 'react'
import {Layout, Typography, Table, Input, Button} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons';
import "./Payment.css"
import CustomTable from '../CustomTable/CustomTable';



const {Header} = Layout;
const {Text} = Typography;

function Payment() {
  return (
    <Layout className='main'>
      <Header className='header-tag'>Payment<ArrowRightOutlined style={{marginLeft: 10}}/> </Header>
        <Layout className='search-feature'>
            <Input style={{width: 250, marginLeft: 40}}
                placeholder='Search'
            />
            <Button style={{marginLeft: 20, backgroundColor: "#8323ff", color: 'white'}}>Search</Button>
        </Layout>
        <Layout className='table-area'>
            <Text id='text'>Payments</Text>
            <CustomTable/>
        </Layout>
    </Layout>    
    )
}

export default Payment;