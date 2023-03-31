import React, { memo, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './CustomCalendar.css'
import CustomModal from "../CustomModal/CustomModal";
import ManageTrainingClassesService from "../../services/ManageTrainingClassesService";




const localizer = momentLocalizer(moment);




function CustomCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvent] = useState([])
  const [values, setValues] = useState({
    id: '',
    startDate: '',
    Class: '',
    coach: '', 
    endDate: ''
  })

  const getAllTrainingClasses = () => {
    ManageTrainingClassesService.getAllTrainingClasses().then(res => {
      console.log(res.data.data)
    for(let i =0 ; i < res.data.data.length ; i++ ) {
      
      setEvent([...events, {
        id: res.data.data[i].id, 
        title: (<>
       Class:  {res.data.data[i].class } <br />
       Coach:   {res.data.data[i].coach
      }
          </>),
          start: new Date(res.data.data[i].time),
          end:  new Date(res.data.data[i].time)
      }])

    }
      
     

     
    }).catch(err => {
      console.log(err)
    })

  }
  
 
 console.log(events)



  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleEventClick = (event) => {
    console.log("Event clicked:", event);

    showModal();
    
  };



  
  
  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      start: slotInfo.start,
      end: slotInfo.end,
      title: 'New Event',
    };
    setEvent([...events, newEvent]);
  };

  

  useEffect(() => {
    getAllTrainingClasses()
  }, [])

  return (
    <>
    <Calendar
     localizer ={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={handleEventClick}
      selectable
      onSelectSlot={handleSelectSlot}
    />
    <CustomModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            id ={values.id} start = {values.startDate} Class ={values.Class} end ={values.endDate} coach ={values.coach}
          />
          
          </>
  );
}

export default memo(CustomCalendar)
