import { Layout, Table , Space} from "antd";
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
        render: () => (
          <Space size="middle">
        <span className="edit-span">Edit</span>|
        <span className="delete-span">Delete</span>
      </Space>

        )
      }
  ];
  const data = [
    {
      key: '1',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
    },
    {
      key: '2',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
    
    },
    {
      key: '3',
      name: 'Fitness Gym',
      link: 'https://www.google.com',
      qr: 'xyz',
     
    },
    {
        key: '4',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
     
      },
      {
        key: '5',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
      
      },
      {
        key: '6',
        name: 'Fitness Gym',
        link: 'https://www.google.com',
        qr: 'xyz',
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
