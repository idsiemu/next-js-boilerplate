import axiosApiInstance from "src/utils/axiosInstance";
import { API_DOMAIN } from "src/utils/ENV";
import axios from 'axios';
import { CANCEL } from 'redux-saga';

export const sessionInit = () => {
    const source = axios.CancelToken.source();

    const response: any = axiosApiInstance().get(`${API_DOMAIN}/api/guests/hello-world`)

    response[CANCEL] = () => source.cancel();

    return response;
}