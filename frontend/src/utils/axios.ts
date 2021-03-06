import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    timeout: 6000,
    withCredentials: true
})

export default instance
