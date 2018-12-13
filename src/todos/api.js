import axios from 'axios';

class Api {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3001"
    })
  }
  getAll(){
    return this.axiosInstance.get('/todos')
  }
  create(todo){
    // todo: { name: String }
    return this.axiosInstance.post('/todos', todo)
  }
}

const _api = new Api()

export default _api