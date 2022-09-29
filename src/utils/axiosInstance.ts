import axios from 'axios'
import { TOKEN } from 'src/utils/ENV';
import { getCookieValue } from 'src/utils/cookie';

const axiosApiInstance = axios.create();

const interceptor = () => {

    axiosApiInstance.interceptors.request.use(
        async config => {
          config.headers = {
            ...config.headers,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            [TOKEN]: getCookieValue(TOKEN),
          };
          return config;
        },
        error => {
          Promise.reject(error);
        }
    );

    axiosApiInstance.interceptors.response.use(
        async error => {
          // 향후 리프레쉬 토큰 처리 해야함
          return Promise.reject(error);
        }
    );
    return axiosApiInstance;
}

export default interceptor