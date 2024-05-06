import axios from 'axios'

const apiFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default apiFetch