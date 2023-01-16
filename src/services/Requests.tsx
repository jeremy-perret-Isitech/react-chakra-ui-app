import axios from "axios";

const httpRequestGet = (url: string, headers: any): Promise<any> => {
    return axios.get(url, headers=headers);
}

const httpRequestPost = (url: string, data: any, headers: any): Promise<any> => {
    return axios.post(url, data=data, headers=headers);
}

const httpRequestDelete = (url: string, data: any): Promise<void> => {
    return axios.delete(url, data=data);
}