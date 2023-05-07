import { Layout, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import "./CustomSideBar.css"
import { CalendarOutlined, HomeOutlined, MessageOutlined, VideoCameraOutlined, MoneyCollectOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';






const { Title } = Typography;
const { Text } = Typography;


function CustomSideBar() {


  const history = useHistory();




  const goToHome = () => {

    history.push("/");
  }




  const goToMeetingSchedule = () => {

    history.push("/meetingschedule");
  }



  const goToChat = () => {

    history.push("/chat")
  }



  const goToQRCode = () => {

    history.push("/qrcode")
  }



  const goToPayments = () => {

    history.push("/payment")
  }



  const goToCustomers = () => {

    history.push("/customers")
  }





  return (


    <Layout id='side-bar-component'>



      <HomeOutlined


        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }}

        id='home-icon'
        onClick={goToHome}
      />





      <CalendarOutlined

        onClick={goToMeetingSchedule}
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }} />



      <MessageOutlined


        onClick={goToChat}
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }}

      />



      <VideoCameraOutlined



        onClick={goToQRCode}
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }}

      />




      <MoneyCollectOutlined

        onClick={goToPayments}
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }}

      />



      <UsergroupAddOutlined

        onClick={goToCustomers}
        id='calendar-icon'
        style=
        {{
          color: "white",
          fontSize: 23,
          cursor: "pointer",
          marginBottom: 50
        }}
      />

    </Layout>

  )
}

export default CustomSideBar