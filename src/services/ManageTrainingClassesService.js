import axios from 'axios'
import { getAllTrainingClassesApiUrl, saveTrainingScheduleApiUrl, updateTrainingScheduleApiUrl } from '../apis/ApiUrls'



class ManageTrainingClassesService {
 
    getAllTrainingClasses() {
        return axios.get(getAllTrainingClassesApiUrl())

    }



    async updateTrainingSchedule(scheduleID,data) {
        return axios.put(updateTrainingScheduleApiUrl(scheduleID),data);
    }



    async saveTrainingSchedule(data) {

        return axios.post(saveTrainingScheduleApiUrl(),data);
    }




}

export default ManageTrainingClassesService = new ManageTrainingClassesService();