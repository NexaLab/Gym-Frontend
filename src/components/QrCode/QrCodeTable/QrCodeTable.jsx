import { Layout, Table, Space, Image } from "antd";
import React, { useState } from "react";
import "./QrCodeTable.css";
import QRCode from "qrcode";

const { Header, Content } = Layout;

// console.log(urls)

function QrCodeTable() {
  const [url, setUrl] = useState("");
  const [lists , setLists] = useState([
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
  ])

  QRCode.toDataURL("https://www.youtube.com/watch?v=n1YssV3Iz0Y")
    .then((url) => {
      setUrl(url);
    })
    .catch((err) => {
      console.error(err);
    });


    const deleteItem = (list) => {
      
      const newList  = lists.filter(l => l.key !== list.key )
      setLists(newList);
  
    }

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
          <span className="delete-span" onClick= { () => console.log('hello')}>Delete</span>
        </Space>
      ),
    },
  ];


 
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Header className="barcode-header"> Barcode List</Header>
      <Content style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <Table
          columns={columns}
          dataSource={lists}
          bordered
          pagination={{
            pageSize: 5,
          }}
          style={{ width: '1250px', height: '400px'}} 
        />
      </Content>
    </Layout>
  );
}

export default QrCodeTable;
