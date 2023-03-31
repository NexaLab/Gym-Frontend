import React, { memo, useRef } from "react";
import { Modal, Button , Form, Input , DatePicker, TimePicker} from "antd";

function CustomModal({ isModalOpen, setIsModalOpen , id , start, Class , coach , end}) {


//Updated Strings  
const [form] = Form.useForm();
const formRef = useRef(null)
const newClass = Class.split(":")
const newCoach = coach.split(":")
const newStartDate = start && `${start.getDate()} - ${start.getMonth()} - ${start.getFullYear()}`
const endTime = end && end.toLocaleTimeString()
const time = start && start.toLocaleTimeString();



//Functions
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    form.resetFields();
    formRef.current.setFieldsValue({ datePickerFieldName: '' , timePickerFieldName: ''});
    console.log('Success:', values);
    console.log(id, start)
    
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  
  return (
    <div>
      <Modal
        title = ''
        open={isModalOpen}
        onOk={handleOk}
        footer={[
          
        ]}
        onCancel={handleCancel}
      >
 
  <Form  form={form} ref = {formRef}
    name="basic"
   
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    
  >
    <Form.Item
      label="Class"
      name="Class" 
    >
      <Input placeholder={newClass[1]} />
    </Form.Item>

    <Form.Item
      label="Coach"
      name="Coach"
      
     
    >
      <Input  placeholder ={newCoach[1]}/>
    </Form.Item>
    <Form.Item label="Date" name="datePickerFieldName">
        <DatePicker placeholder={newStartDate} />
      </Form.Item>
      <Form.Item label="Start-Time" name= "timePickerFieldName">
        <TimePicker placeholder={time} />
      </Form.Item>
      <Form.Item label="End-Time" name= "timePickerFieldName">
        <TimePicker placeholder={endTime} />
      </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" onClick={() => setIsModalOpen(false)}  htmlType="submit">
        Update
      </Button>
    </Form.Item>
      
  </Form>
      </Modal>
    </div>
  );
}

export default memo(CustomModal);
