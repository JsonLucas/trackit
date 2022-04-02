import AxiosConfig from './AxiosConfig';
const GetHabits = async (headers, setLoaded, setData) => {
    const config = { 
        headers: {
            Authorization: headers
        } 
    };
    let res = {};
    const request = AxiosConfig.get('/habits', config);
    await request.then((response) => {
        const {status, data} = response;
        res = {...res, status, data};
    }).catch((error) => {
        const {status} = error.response;
        res = {...res, status};
        console.log('error', error.response.status, error.response.data);
    });
    setLoaded(true);
    setData(res);
    return res;
};

export default GetHabits;