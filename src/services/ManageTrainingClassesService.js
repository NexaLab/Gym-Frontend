import axios from 'axios'
import { getAllTrainingClassesApiUrl } from '../apis/ApiUrls'



class ManageTrainingClassesService {
 
    getAllTrainingClasses() {
        return axios.get(getAllTrainingClassesApiUrl())

    }
}

export default ManageTrainingClassesService = new ManageTrainingClassesService();