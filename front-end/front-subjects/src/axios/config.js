import axios from 'axios'

const apiFetch = axios.create({
    baseURL: "http://10.234.83.58:8000/api/v1/"
})

export default apiFetch