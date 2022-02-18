import axios from "axios"
import { API_ENDPOINTS } from '../../'
import authHeader from "../../authHeader"


export const login = (email, password) => {
    const response = axios.post(`${API_ENDPOINTS.url}login`, {email, password})
    return Promise.resolve(response)
}

export const logout = () => {
    localStorage.removeItem('token')
    return
}

export const collectAll = (entity) => {
    const res = axios.get(`${API_ENDPOINTS.url}` + entity, {headers: authHeader()})
    return Promise.resolve(res)
}

export const store = (entity, body) => {
    const res = axios.post(`${API_ENDPOINTS.url}` + entity, body, {headers: authHeader()})
    return Promise.resolve(res)
}

export const fetcher = (entity, id) => {
    const res = axios.get(`${API_ENDPOINTS.url + entity}/${id}`, {headers: authHeader()})
    return Promise.resolve(res)
}

export const alter = (entity, id, body) => {
    const res = axios.patch(`${API_ENDPOINTS.url + entity}/${id}`, body, {headers: authHeader()})
    return Promise.resolve(res)
}

export const destroy = (entity, id) => {
    const res = axios.delete(`${API_ENDPOINTS.url + entity}/${id}`, {headers: authHeader()})
    return Promise.resolve(res)
}

export const upload = (file) => {
    const res = axios.post(`${API_ENDPOINTS.cloudinary}`, file)
    return Promise.resolve(res)
}