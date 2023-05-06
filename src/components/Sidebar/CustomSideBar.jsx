import { Layout, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import "./CustomSideBar.css"
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';
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
          marginBottom:50
        }} />


    </Layout>

  )
}

export default CustomSideBar