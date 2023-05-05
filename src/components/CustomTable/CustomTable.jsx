import { Table, Modal, Layout, Divider,Typography } from 'antd';
import { useState } from 'react';
import "./CustomTable.css"
const {Text} = Typography;

function CustomTable() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const columns = [
    {
      title: 'Name',
      width: 80,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Phone',
      width: 80,
      dataIndex: 'phone',
      key: 'phone',
      fixed: 'left',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '1',
    },
    {
      title: 'Membership',
      dataIndex: 'membership',
      key: '2',
    },
    {
      title: 'Subscription',
      dataIndex: 'subscription',
      key: '3',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: '4',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: '5',
    },
    {
      title: 'Payment Receipt',
      dataIndex: 'payment',
      key: 'payment',
      width: 100,
      render: () => <a onClick={showModal} style={{color: 'white', fontWeight: 500, borderRadius: 10, backgroundColor: 'lightgray', padding: 5}}>Invoice</a>,
    },
    {
      title: 'Message',
      key: 'message',
      width: 100,
      render: () => <a style={{color: 'white', fontWeight: 500, borderRadius: 10, backgroundColor: 'lightgreen', padding: 5}} >Message</a>,
    },
  ];


  const data = [
    {
      key: '1',
      name: 'John Brown',
      phone: 32241,
      email: 'abcxyz@gmail.com',
    },
    {
      key: '2',
      name: 'Jim Green',
      phone: 214124,
      email: 'abcxyz@gmail.com',
    },
  ];


  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text style={{display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: 20}}>Fitness Gym</Text>
        <Divider/>
        <Layout className='payment-details'>
          <Text>Name: Sara</Text>
          <Text>Address: KSA</Text>
          <Text>Mobile: 17421264</Text>
        </Layout>
        <Layout className='payment-data'>
          <Text>Day</Text>
          <Text>Amount</Text>
        </Layout>
        <Divider/>
        <Layout className='payment-data'>
          <Text>Saturday</Text>
          <Text>150$</Text>
        </Layout>
        <Divider/>
        <Layout className='payment-data'>
          <Text>Total</Text>
          <Text>150$</Text>
        </Layout>
        
      </Modal>
    </Layout>
  )
}
export default CustomTable;