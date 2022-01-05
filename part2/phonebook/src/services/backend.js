import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
} 

const deletion = id => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

const create = newPerson => {
    return axios.post(baseURL, newPerson)
}

const replace = (id, newPerson) => {
    return axios.put(`${baseURL}/${id}`, newPerson)
}

export default {getAll, deletion, create, replace}