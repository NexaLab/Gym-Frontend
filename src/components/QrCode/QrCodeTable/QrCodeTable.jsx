import { Layout, Table } from "antd";
import React from "react";
import './QrCodeTable.css'

const { Header, Content } = Layout;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Video Link',
      dataIndex: 'link',
    },
    {
      title: 'QR',
      dataIndex: 'qr',
    },
    {
        title: 'Action',
        dataIndex: 'action',
      }
  ];
  const data = [
    {
      key: '1',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
      action: 'Edit | Delete'
    },
    {
      key: '2',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
      action: 'Edit | Delete'
    },
    {
      key: '3',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
      action: 'Edit | Delete'
    },
    {
        key: '4',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
        action: 'Edit | Delete'
      },
      {
        key: '5',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
        action: 'Edit | Delete'
      },
      {
        key: '6',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
        action: 'Edit | Delete'
      },
  ];

function QrCodeTable() {
  return (
    <Layout style={{backgroundColor: '#ffffff'}}>

      <Header className="barcode-header"> Barcode List</Header>
      <Content >
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
