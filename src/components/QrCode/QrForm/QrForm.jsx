import React from 'react';
import "./QrForm.css"
import Layout from 'antd/es/layout/layout';
import { Form, Input, Button, notification } from 'antd';
import { addNewVideoOfQRCode, addNewVideoOfQRCodeInDatabase } from '../../../services/VideoQRCodeSlice';
import { useDispatch, useSelector } from "react-redux"
import QRCode from "qrcode";


function QrForm({ urls, setUrls, generateQRFromVideoLinks }) {


    const dispatch = useDispatch();
    const videosLists = useSelector(state => state.videoQRCodeSlice);
    const [api, contextHolder] = notification.useNotification();




    const openNotificationWithIcon = (type, message, description) => {

        api[type]({
            message: message,
            description:
                description
        });

    };







    const onQrFormFinish = async (values) => {




        const response = await dispatch(addNewVideoOfQRCodeInDatabase({
            name: values.videoName,
            link: values.videoLink
        }));






        const newUrls = await Promise.all(response.payload.map(async videoQRCodeData => {
            const url = await QRCode.toDataURL(videoQRCodeData.link);
            return { id: videoQRCodeData.id, url: url, link: videoQRCodeData.link };
        }));
        setUrls(newUrls);






        if (videosLists.isError == true) {

            openNotificationWithIcon("error", "Error", "Might be a problem from your side or server side")

        }


        else {

            openNotificationWithIcon("success", "Success", "QR Code has been added successfully");

        }


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

            {contextHolder}
        </Layout>
    )
}

export default QrForm