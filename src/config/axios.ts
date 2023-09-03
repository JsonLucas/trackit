import axios from 'axios';

export const requester = axios.create({ baseURL: 'http://localhost:5001' });

//configurar esses interceptors

//configurar os headers aqui
// requester.interceptors.request.use(async (req) => {});

//configurar os tokens vindos do servidor aqui
// requester.interceptors.response.use(async (res) => {});