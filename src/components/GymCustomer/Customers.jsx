import React, { useState, useEffect } from 'react'
import { Layout, Typography, Input, } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import "./Customers.css"
import CustomTable from '../CustomTable/CustomTable';
import { useHistory } from 'react-router-dom';


const { Header } = Layout;
const { Text } = Typography;

function Customers() {


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
      <Header className='header-tag'>Join Gym Customer<ArrowRightOutlined style={{ marginLeft: 10 }} /> </Header>
      <Layout className='search-feature'>
        <Input style={{ width: 250, marginLeft: 40 }}
          placeholder='Search by Name' onChange={onSearch}
        />

      </Layout>
      <Layout className='table-area'>
        <Text id='text'>Join Gym Customer</Text>
        <CustomTable searchValue={searchValue} />
      </Layout>
    </Layout>
  )
}

export default Customers;