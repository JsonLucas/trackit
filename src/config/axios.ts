import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const requester = axios.create({ baseURL: 'http://localhost:5001' });
const { getLocalStorageData } = useLocalStorage();
//configurar esses interceptors

//configurar os headers aqui
requester.interceptors.request.use(async (req: InternalAxiosRequestConfig<any>) => {
    console.log('request aqui', req);
    req.headers.Authorization = await getLocalStorageData('accessToken');
    return req;
});

//configurar os tokens vindos do servidor aqui
requester.interceptors.response.use((res: AxiosResponse<any, any>) => {
    console.log('response aqui', res);
    return res;
});