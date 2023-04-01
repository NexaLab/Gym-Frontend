import axios from 'axios'
import { getAllClientsUrl } from '../apis/ApiUrls'


class ClientInfoService {


    getAllClients ()  {
          return axios.get(getAllClientsUrl())
    }
}

export default ClientInfoService= new ClientInfoService();