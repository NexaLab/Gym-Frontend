import { Layout, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import "./CustomSideBar.css"
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';






const { Title } = Typography;
const { Text } = Typography;


function CustomSideBar() {
  return (


    <Layout id='side-bar-component'>



      <HomeOutlined


        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom:50
        }}

        id='home-icon'
      />





      <CalendarOutlined
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom:50
        }} />


    </Layout>

  )
}

export default CustomSideBar