import { Layout, Table, Space, Image } from "antd";
import React, { useState } from "react";
import "./QrCodeTable.css";
import QRCode from "qrcode";

const { Header, Content } = Layout;

// console.log(urls)

function QrCodeTable() {
  const [url, setUrl] = useState("");

  QRCode.toDataURL("https://www.youtube.com/watch?v=n1YssV3Iz0Y")
    .then((url) => {
      setUrl(url);
    })
    .catch((err) => {
      console.error(err);
    });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Video Link",
      dataIndex: "link",
    },
    {
      title: "QR",
      dataIndex: "qr",
      render: () => (
        <Space size="middle">
          <Image width={60} src={url} />
        </Space>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Space size="middle">
          <span className="edit-span">Edit</span>|
          <span className="delete-span">Delete</span>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
    {
      key: "2",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
    {
      key: "3",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
    {
      key: "4",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
    {
      key: "5",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
    {
      key: "6",
      name: "Fitness Gym",
      link: "https://www.google.com",
    },
  ];

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Header className="barcode-header"> Barcode List</Header>
      <Content>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            pageSize: 5,
          }}
        />
      </Content>
    </Layout>
  );
}

export default QrCodeTable;
