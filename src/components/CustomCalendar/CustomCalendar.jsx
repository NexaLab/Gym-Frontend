import React, { memo, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import './CustomCalendar.css'
import CustomModal from "../CustomModal/CustomModal";
import ManageTrainingClassesService from "../../services/ManageTrainingClassesService";




const localizer = momentLocalizer(moment);




function CustomCalendar() {



  const [isModalOpen, setIsModalOpen] = useState(false);



  const[ saveStatus , setSaveStatus] = useState("");


  const [events, setEvent] = useState([])


  const [values, setValues] = useState({
    id: '',
    startDate: '',
    Class: '',
    coach: '',
    endDate: '',
    coachID : 0
  })



  const getAllTrainingClasses = () => {


    ManageTrainingClassesService.getAllTrainingClasses()


      .then(res => {






        const newEvents = [];


        for (let i = 0; i < res.data.data.length; i++) {

          

          newEvents.push(
            {


              id: res.data.data[i].id,
              coachID: res.data.data[i].coachID,

              title: (<>
                Class:  { res.data.data[i].trainingClass } <br />
                Coach: { res.data.data[i].firstName + " " + res.data.data[i].lastName }
              </>),


              start: new Date(res.data.data[i].startDate),
              end: new Date(res.data.data[i].endDate)


            }
          )
          

          setEvent(newEvents)


        }




      }).catch(err => {


        console.log(err)


      })

  }




 useEffect(() => {
  getAllTrainingClasses()
 },[])





  const showModal = () => {
    setIsModalOpen(true);
  };





  const handleEventClick = (event) => {

    setValues(
      {
        ...values,
        id: event.id,
        Class: event.title.props.children[1],
        coach: event.title.props.children[5],
        startDate: event.start,
        endDate: event.end,
        coachID: event.coachID
      });

      setSaveStatus("UPDATE");
    showModal();

  };







  const handleSelectSlot = (slotInfo) => {

    setValues(
      {
        ...values,
        id: "",
        Class: "",
        coach: "",
        startDate: "",
        endDate: "",
        coachID: ""
      });

    setSaveStatus("ADD");

   showModal();


  };







  return (
    <>
      <Calendar
        localizer={localizer}
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
        id={values.id} start={values.startDate} Class={values.Class} end={values.endDate} coach={values.coach} coachID={values.coachID}

        events= {events} setEvents = {setEvent}
        saveStatus = {saveStatus}
      />

    </>
  );
}

export default memo(CustomCalendar)
