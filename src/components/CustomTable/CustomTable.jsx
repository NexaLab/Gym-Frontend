import { Table, Modal, Layout, Divider,Typography } from 'antd';
import { useState } from 'react';
import "./CustomTable.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPayment } from "../../services/PaymentSlice";



const {Text} = Typography;


function CustomTable({searchValue}) {

  const [paymentInvoiceOfUser, setPaymentInvoiceOfUser] = useState({})

  const dispatch = useDispatch();
  const payment = useSelector((state) => state.PaymentSlice);


  useEffect(() => {
    dispatch(getAllPayment());
  }, []);



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
      dataIndex: 'firstName',
      key: 1,
      fixed: 'left',
    },
    {
      title: 'Phone',
      width: 80,
      dataIndex: 'phoneNo',
      key: 2,
      fixed: 'left',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 3,
    },
    {
      title: 'Membership',
      dataIndex: 'status',
      key: 4,
    },
    {
      title: 'Subscription Number',
      dataIndex: 'membershipId',
      key: 5,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate' ,
      key: 6,
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 7,
    },
    {
      title: 'Payment Receipt',
      dataIndex: 'payment',
      key: 9,
      width: 100,
      render: () => <span onClick={showModal} style={{color: 'white', fontWeight: 500, borderRadius: 10, backgroundColor: 'lightgray', padding: 5 , cursor: 'pointer'}}>Invoice</span>,
    }
  ];


 


  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={searchValue == "" ? payment.data : payment.data.filter(data => {
          if(data.firstName.toLocaleUpperCase().indexOf(searchValue.toLocaleUpperCase()) > -1) {

            return data.firstName

          }
        })}
        scroll={{
          x: 1300,
        }}
        onRow={(record) => ({
          onClick: () => {
            // console.log("Clicked row:", record);
            setPaymentInvoiceOfUser(record)
          },
        })}
      />
       <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text style={{display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: 20}}>Fitness Gym</Text>
        <Divider/>
        <Layout className='payment-details'>
          <Text>Name: {paymentInvoiceOfUser && paymentInvoiceOfUser.firstName}</Text>
          <Text>Address: Kazimabad</Text>
          <Text>Mobile: {paymentInvoiceOfUser && paymentInvoiceOfUser.phoneNo}</Text>
        </Layout>
        <Layout className='payment-data'>
          <Text>Amount</Text>
        </Layout>
        <Divider/>
        <Layout className='payment-data'>
          <Text>Total</Text>
          <Text>{paymentInvoiceOfUser && paymentInvoiceOfUser.price}$</Text>
        </Layout>
        
      </Modal>
    </Layout>
  )
}
export default CustomTable;