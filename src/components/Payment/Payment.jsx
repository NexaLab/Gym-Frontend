import React, { useState } from 'react'
import { Layout, Typography, Input, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import "./Payment.css"
import CustomTable from '../CustomTable/CustomTable';
import CustomSideBar from '../Sidebar/CustomSideBar';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const { Header } = Layout;
const { Text } = Typography;



function Payment() {

  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();



  const onSearch = (event) => {
    setSearchValue(event.target.value);
  }




  useEffect(() => {

    if (!(localStorage.getItem("jwt") && localStorage.getItem("email"))) {

      history.push("/login");

    }





  }, [])









  return (

    <Layout className='main'>
      <Header className='header-tag'>Payment<ArrowRightOutlined style={{ marginLeft: 10 }} /> </Header>
      <Layout className='search-feature'>
        <Input style={{ width: 250, marginLeft: 40 }}
          placeholder='Search by Name' onChange={onSearch}
        />
      </Layout>
      <Layout className='table-area'>
        <Text id='text'>Payments</Text>
        <CustomTable searchValue={searchValue} />
      </Layout>
    </Layout>

  )
}

export default Payment;