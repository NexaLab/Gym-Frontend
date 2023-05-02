import React, { memo, useEffect, useRef, useState } from "react";
import { Modal, Button, Form, Input, DatePicker, TimePicker, Select } from "antd";
import ManageTrainingClassesService from "../../services/ManageTrainingClassesService";
import CoachService from "../../services/CoachService";
import set from "date-fns/esm/set/index";





const { Option } = Select;




function CustomModal({ isModalOpen, setIsModalOpen, id, start, Class, coach, end, coachID, events, setEvents, saveStatus }) {





  //Updated Strings  


  const [form] = Form.useForm();

  const formRef = useRef(null)
  const newStartDate = start && `${start.getDate()} - ${start.getMonth() + 1} - ${start.getFullYear()}`
  const endTime = end && end.toLocaleTimeString()
  const time = start && start.toLocaleTimeString()




  const [coaches, setCoaches] = useState([]);


  //Functions


  const handleOk = () => {
    setIsModalOpen(false);
  };




  const handleCancel = () => {
    setIsModalOpen(false);
  };






  const onFinish = (values) => {



    form.resetFields();



    const date = new Date(values.datePickerFieldName.$d);
    const startTime = new Date(values.startDateTimePickerFieldName)
    const endTime = new Date(values.endDateTimePickerFieldName)



    const selectedCoach = coaches.find((coachState) => coachState.id === values.Coach);





    const data = {

      "class": values.Class,
      "startDate": `${date.getFullYear()}-${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${startTime.toLocaleTimeString([], { hour12: false })}`,
      "endDate": `${date.getFullYear()}-${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${endTime.toLocaleTimeString([], { hour12: false })}`,
      "coachID": values.Coach

    }





    if(saveStatus === "ADD") {






      const updatedEvents = [...events,{
        id: Math.random(),
        coachID: coachID,
  
        title: (<>
          Class:  {values.Class} <br />
          Coach: {selectedCoach.first_name + " " + selectedCoach.last_name}
        </>),
  
  
        start: new Date(values.datePickerFieldName.$d),
        end: new Date(values.datePickerFieldName.$d)
      }];





      setEvents(updatedEvents);





      ManageTrainingClassesService.saveTrainingSchedule(data)
      .then(res => {


        setIsModalOpen(false);

      })
      .catch(error => {


        console.log(error);


      })

      
   
    } 
    



    
    
    else { 




    const updatedEvents = events.map(event => event.id === id ? {
      id: event.id,
      coachID: coachID,

      title: (<>
        Class:  {values.Class} <br />
        Coach: {selectedCoach.first_name + " " + selectedCoach.last_name}
      </>),


      start: new Date(values.datePickerFieldName.$d),
      end: new Date(values.datePickerFieldName.$d)
    } : event)




    setEvents(updatedEvents);







    ManageTrainingClassesService.updateTrainingSchedule(id, data)
      .then(res => {


        setIsModalOpen(false);


      })
      .catch(error => {


        console.log(error);

      })



    }




  };






  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };




 





  const getAllCoaches = () => {



    CoachService.getAllCoaches()
      .then(res => {



        setCoaches(res.data.data);


      })
      .catch(error => {



        console.log(error);


      })
  }








  useEffect(() => {



    getAllCoaches();



  }, [])









  return (



    <div>
      <Modal
        title=''
        open={isModalOpen}
        onOk={handleOk}
        footer={[

        ]}
        onCancel={handleCancel}
      >

        <Form form={form} ref={formRef}
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

            rules={[
              {
                required: true,
                message: 'Enter Class',
              },
            ]}

          >
            <Input placeholder={Class} />
          </Form.Item>

          <Form.Item
            label="Coach"
            name="Coach"

            rules={[
              {
                required: true,
                message: 'Enter Coach',
              },
            ]}

          >
            <Select placeholder={coach} style={{ width: 120 }} >
              {
                coaches.map(coachState => {



                  return (

                    <Option key={coachState.id} value={coachState.id}>{coachState.first_name + " " + coachState.last_name}</Option>

                  )
                })


              }

            </Select>
          </Form.Item>
          <Form.Item label="Date" name="datePickerFieldName"


            rules={[
              {
                required: true,
                message: 'Select Date',
              },
            ]}


          >
            <DatePicker placeholder={newStartDate} />
          </Form.Item>
          <Form.Item label="Start-Time" name="startDateTimePickerFieldName"


            rules={[
              {
                required: true,
                message: 'Select Start time',
              },
            ]}

          >
            <TimePicker placeholder={time}

            />
          </Form.Item>
          <Form.Item label="End-Time" name="endDateTimePickerFieldName"

            rules={[
              {
                required: true,
                message: 'Select End time',
              },
            ]}

          >
            <TimePicker placeholder={endTime}

            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {saveStatus === "ADD" ? ( <span>Add</span>) : <span>Update</span>} 
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </div>



  );
}

export default memo(CustomModal);
