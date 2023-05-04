import React from "react";
import { Layout } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./QrCode.css";
import QrCodeTable from "./QrCodeTable/QrCodeTable";
import QrForm from "./QrForm/QrForm";


const { Header, Content } = Layout;

function QrCode() {

 

  return (
    <Layout className="main-layout">
      <Header className="qr-header">
        <h1>Barcode</h1>
        <ArrowRightOutlined className="qr-arrow" />
      </Header>
      <Content className="qrCode-content">
        <QrForm />
        <Layout className="qrTable-layout">
          <QrCodeTable />
        </Layout>
      </Content>
    </Layout>
  );
}

export default QrCode;
