import React from 'react'
import { Layout, Table, Typography, Modal,Form,Input } from 'antd'
import {ArrowRightOutlined, CloseOutlined} from '@ant-design/icons';
import { useState } from 'react';
import "./WeeklySchedule.css"
import TextArea from 'antd/es/input/TextArea';


const {Text} = Typography;
const {Header, Content} = Layout;


function WeeklySchedule() {

    const [modalVisible, setModalVisible] = useState(false)
    
    const editSchedule = () => {
        setModalVisible(true);
    }
    
    const handleOk = () =>{
        setModalVisible(false)
    }
    
    const handleCancel = () =>{
        setModalVisible(false)
    }

    
    const dataSource = [
        {
            key: 1,
            day: "Monday",
            headName: "Chest",
            exerciseName: "Dumbell Bench Press, Bench Press",
        },
        {
            key: 2,
            day: "Tuesday",
            headName: "Arm",
            exerciseName: "Hammer Curl, Tricep Dips",
        },
        {
            key: 3,
            day: "Wednesday",
            headName: "Leg",
            exerciseName: "",
        },
    ]

    const columns = [
        {
            title: "Day",
            dataIndex: "day",
            key: "day",
        },
        {
            title: "Head Name",
            dataIndex: "headName",
            key: "headName",
        },
        {
            title: "Exercise Name",
            dataIndex: "exerciseName",
            key: "exerciseName",
        },
        {
            title: "Action",
            key: "action",
            render: () => 
                <a onClick={editSchedule}>Edit</a>
        },
    ]

  return (
    <Layout className='main-layout'>
      <Header className='header'>Manage Weekly Workout Schedule <ArrowRightOutlined style={{marginLeft: 10}}/></Header>
      <Content className='content-table'>
        <Text id='t1'>Weekly Schedule</Text>
        <Table className='table' dataSource={dataSource} columns={columns} pagination={false} />
      </Content>
        <Modal
            title='Edit Weekly Schedule'
            width="70%"
            open={modalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            >
                <Layout className='modal-layout'>
                    <Text style={{fontSize: 20, fontWeight: 500, color: "#8323ff"}} >Week 41</Text>
                    <Text style={{fontWeight: 500, color: "#8323ff", marginBottom: 10}} >Sunday</Text>
                    <Form.Item label="Head Name">   
                        <Input placeholder='Enter Head Name' size='large' style={{width: "80%"}} />
                    </Form.Item>
                    <Form.Item label="Exercise Name">
                        <TextArea rows={4} placeholder='Enter Exercise' size='large' style={{width: "80%"}} />
                    </Form.Item>
                </Layout>
        </Modal>
    </Layout>
    )
}

export default WeeklySchedule;