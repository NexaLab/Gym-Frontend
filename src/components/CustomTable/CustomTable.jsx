import { Table, Modal, Layout, Divider, Typography, Button, notification } from 'antd';
import { useState } from 'react';
import "./CustomTable.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPayment } from "../../services/PaymentSlice";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useHistory } from 'react-router-dom';




// const {Text} = Typography;


function CustomTable({ searchValue }) {

  const [paymentInvoiceOfUser, setPaymentInvoiceOfUser] = useState({})
  const history = useHistory();


  const dispatch = useDispatch();
  const payment = useSelector((state) => state.PaymentSlice);
  const [api, contextHolder] = notification.useNotification();


  console.log(payment)

  const openNotificationWithIcon = (type, message, description) => {

    api[type]({
      message: message,
      description:
        description
    });

  };






  useEffect(() => {


    dispatch(getAllPayment());


    if (payment.isError == true) {
      openNotificationWithIcon("error", "Error", "Might be a problem from server side")
    }


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

  const Invoice = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Invoice</Text>
          <Text style={styles.subtitle}>Fitness Gym</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>Customer Detail:</Text>
          <Text style={styles.total}>Name: {paymentInvoiceOfUser && paymentInvoiceOfUser.firstName} {paymentInvoiceOfUser && paymentInvoiceOfUser.lastName}</Text>
          <Text style={styles.total}>Address: Kazimabad</Text>
          <Text style={styles.total}>Mobile: {paymentInvoiceOfUser && paymentInvoiceOfUser.phoneNo}</Text>
          <Text style={styles.heading}>Payment Details:</Text>
          <Text style={styles.total}>Amount:{paymentInvoiceOfUser && paymentInvoiceOfUser.price}$ </Text>
        </View>
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      marginTop: 50
    },
    header: {
      marginBottom: 30,
      borderBottom: '1px solid black'
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
    },
    content: {
      marginBottom: 30,
      textAlign: 'center'
    },
    heading: {
      fontSize: 23,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 50,
      borderBottom: '1px solid black'

    },
    total: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 10,
    },
  });


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
      dataIndex: 'startDate',
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
      render: () => <span onClick={showModal} style={{ color: 'white', fontWeight: 500, borderRadius: 10, backgroundColor: 'lightgray', padding: 5, cursor: 'pointer' }}>Invoice</span>,
    },

    {
      title: 'Message',
      dataIndex: 'message',
      key: 10,
      width: 100,
      render: (text, record) => <span onClick={() => {

        history.push('/chat');

      }} style={{ color: 'white', fontWeight: 500, borderRadius: 10, backgroundColor: 'green', padding: 5, cursor: 'pointer' }}>Message</span>,
    }
  ];





  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Table
        columns={columns}
        dataSource={searchValue == "" ? payment.data : payment.data.filter(data => {
          if (data.firstName.toLocaleUpperCase().indexOf(searchValue.toLocaleUpperCase()) > -1) {

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
      <Modal open={isModalOpen} onCancel={handleCancel} footer={[
        <PDFDownloadLink
          key="Download"
          document={<Invoice />}
          fileName="Invoice.pdf"
        >
          <Button style={{ marginRight: '5px' }}>
            Download Invoice
          </Button>
        </PDFDownloadLink>,
        <Button key="ok" type="primary" onClick={handleOk}>
          Ok
        </Button>,

      ]}>
        <h2 style={{ display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>Fitness Gym</h2>
        <Divider />
        <Layout className='payment-details'>
          <p>Name: {paymentInvoiceOfUser && paymentInvoiceOfUser.firstName}</p>
          <p>Address: Kazimabad</p>
          <p>Mobile: {paymentInvoiceOfUser && paymentInvoiceOfUser.phoneNo}</p>
        </Layout>
        <Layout className='payment-data'>
          <h3>Amount</h3>
        </Layout>
        <Divider />
        <Layout className='payment-data'>
          <h3>Total</h3>
          <p>{paymentInvoiceOfUser && paymentInvoiceOfUser.price}$</p>
        </Layout>

      </Modal>
      {contextHolder}
    </Layout>
  )
}
export default CustomTable;