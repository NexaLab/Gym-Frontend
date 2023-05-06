import React from 'react';
import "./QrForm.css"
import Layout from 'antd/es/layout/layout';
import { Form, Input, Button } from 'antd';
import { addNewVideoOfQRCode, addNewVideoOfQRCodeInDatabase } from '../../../services/VideoQRCodeSlice';
import { useDispatch, useSelector } from "react-redux"


function QrForm() {


    const dispatch = useDispatch();






    const onQrFormFinish = (values) => {


        dispatch(addNewVideoOfQRCode({
            key: Math.floor(Math.random() * 10),
            name: values.videoName,
            link: values.videoLink
        }));



        dispatch(addNewVideoOfQRCodeInDatabase({
            name: values.videoName,
            link: values.videoLink
        }))


    };








    const onQrFormFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };





    return (


        <Layout id='qr-form-layout' >


            <Form
                name="basic"
                labelCol={{
                    span: 7,
                }}
                wrapperCol={{
                    span: 20,
                }}

                onFinish={onQrFormFinish}
                onFinishFailed={onQrFormFinishFailed}
                autoComplete="off"

            >

                <h1 style={{ fontSize: '25px', color: 'gray' }}>Add New QR</h1>
                <Form.Item
                    label="Name"
                    name="videoName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a video name!',
                        },
                    ]}
                    className='qr-form-item'
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    label="Video Link"
                    name="videoLink"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a video link !',
                        },
                    ]}
                    className='qr-form-item'
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 1,
                    }}
                    className='qr-form-item'
                >
                    <Button style={{ backgroundColor: '#8323ff ' }} type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>


            </Form>


        </Layout>
    )
}

export default QrForm