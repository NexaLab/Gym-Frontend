import axios from 'axios'
import { getAllCoachesApiUrl } from '../apis/ApiUrls';



class CoachService {
 
   

    getAllCoaches() {

        return axios.get(getAllCoachesApiUrl());
    }
}

export default CoachService = new CoachService();