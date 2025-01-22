import axios from "axios";
import { BASE_URL } from "../Config/config";
import { COMPANY_DETAIL, COMPANY_LIST, CREATE_COMPANY, DELETE_COMPANY, GENERATE_LICENSE, LOGIN, UPDATE_COMPANY_DETAIL } from "./apiConstants";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");
        if(token){
            config.headers.Authorization = "Bearer " + token;
        }
        // config.data.userType = 1;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export function login(data) {
    return axios.post(BASE_URL + LOGIN, data);
}

export function createCompany(data) {
    return axios.post(BASE_URL + CREATE_COMPANY, data);
}

export function generateLicence() {
    return axios.post(BASE_URL + GENERATE_LICENSE);
}

export function companyList(data) {
    return axios.post(BASE_URL + COMPANY_LIST, data);
}

export function getCompanyDetails(data) {
    return axios.post(BASE_URL + COMPANY_DETAIL, data);
}

export function updateCompany(data) {
    return axios.post(BASE_URL + UPDATE_COMPANY_DETAIL, data);
}

export function deleteCompany(data) {
    return axios.post(BASE_URL + DELETE_COMPANY, data);
}