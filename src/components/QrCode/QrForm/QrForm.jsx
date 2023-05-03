import React from 'react';
import "./QrForm.css"
import Layout from 'antd/es/layout/layout';
import { Form, Input, Button } from 'antd';




function QrForm() {






    const onQrFormFinish = (values) => {
        console.log('Success:', values);
    };




    const onQrFormFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };





    return (


        <Layout id='qr-form-layout' >


            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 5,
                }}

                onFinish={onQrFormFinish}
                onFinishFailed={onQrFormFinishFailed}
                autoComplete="off"
            >


                <Form.Item
                    label="Name"
                    name="video-name"
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
                    name="video-link"
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
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>


            </Form>


        </Layout>
    )
}

export default QrForm