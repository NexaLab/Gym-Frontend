import React from "react";
import "./ManageTrainingClasses.css";
import { Layout } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import RegisterInfo from "../RegistersInfo/RegisterInfo";

const { Header, Content } = Layout;



function ManageTrainingClasses() {


  return (
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
  );
}

export default ManageTrainingClasses;
