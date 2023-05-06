import React, { useState } from "react";
import { Layout } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./QrCode.css";
import QrCodeTable from "./QrCodeTable/QrCodeTable";
import QrForm from "./QrForm/QrForm";
import { getAllVideosLinksForQR } from "../../services/VideoQRCodeSlice";
import { useDispatch } from "react-redux"
import QRCode from "qrcode";



const { Header, Content } = Layout;




function QrCode() {


  const [urls, setUrls] = useState([]);
  const dispatch = useDispatch();


  const generateQRFromVideoLinks = async () => {


    const response = await dispatch(getAllVideosLinksForQR());
    const newUrls = await Promise.all(response.payload.map(async videoQRCodeData => {
      const url = await QRCode.toDataURL(videoQRCodeData.link);
      return { id: videoQRCodeData.id, url: url, link: videoQRCodeData.link };
    }));
    setUrls(newUrls);






  }

  return (
    <Layout className="main-layout">
      <Header className="qr-header">
        <h1>Barcode</h1>
        <ArrowRightOutlined className="qr-arrow" />
      </Header>
      <Content className="qrCode-content">
        <QrForm urls={urls} setUrls={setUrls} generateQRFromVideoLinks={generateQRFromVideoLinks} />
        <Layout className="qrTable-layout">
          <QrCodeTable urls={urls} setUrls={setUrls} generateQRFromVideoLinks={generateQRFromVideoLinks} />
        </Layout>
      </Content>
    </Layout>
  );
}

export default QrCode;