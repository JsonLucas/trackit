import AxiosConfig from './AxiosConfig';
const GetHabits = async (token, setLoaded, setData) => {
    try{
        const config = { 
            headers: {
                Authorization: token
            } 
        };
        const request = await AxiosConfig.get('/habits', config);
        console.log(request.statusText);
        setLoaded(true);
        setData(request);
    }catch(e){
        console.log(e.message);
        setData(e.response);
    }
    setLoaded(true);
};

export default GetHabits;