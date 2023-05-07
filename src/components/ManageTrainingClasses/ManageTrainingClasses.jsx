import React from "react";
import "./ManageTrainingClasses.css";
import { Layout } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import RegisterInfo from "../RegistersInfo/RegisterInfo";
import CustomSideBar from "../Sidebar/CustomSideBar";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const { Header, Content } = Layout;



function ManageTrainingClasses() {

  const history = useHistory();






  useEffect(() => {

    if (!(localStorage.getItem("jwt") && localStorage.getItem("email"))) {

      history.push("/login");

    }


  }, [])





  return (
    <Layout id="meeting-schedule-component-with-sidebar">
      <CustomSideBar />
      <Layout className="training-layout">
        <Header className="training-header">
          <h1>Gym Classes</h1>
          <ArrowRightOutlined className="arrow" />
        </Header>
        <Content>
          <Layout className="calendar-layout">
            <CustomCalendar />
          </Layout>
          <RegisterInfo />
        </Content>
      </Layout>
    </Layout>
  );
}

export default ManageTrainingClasses;
