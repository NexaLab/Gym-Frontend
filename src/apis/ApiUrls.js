
export const getAllClientsUrl = () => {
    return  `http://localhost:3001/clients/getAll`;
}


export const getAllTrainingClassesApiUrl = () => {

    return `http://localhost:3001/training-classes/all`;

}



export const updateTrainingScheduleApiUrl = (scheduleID) => {


    return `http://localhost:3001/training-classes/update/${scheduleID}`
}







export const deleteScheduleByIdApiUrl = (scheduleID) => {


    return `http://localhost:3001/training-classes/delete/${scheduleID}`
}






export const saveTrainingScheduleApiUrl = () => {


    return `http://localhost:3001/training-classes/save`
}





export const getAllCoachesApiUrl = () => {

    return `http://localhost:3001/coach/all`;
}