import AxiosConfig from './AxiosConfig';
const GetHabits = async (token, setLoaded, setData) => {
    try{
        const config = { 
            headers: {
                Authorization: token
            } 
        };
        const request = await AxiosConfig.get('/habits', config);
        console.log(request);
        setLoaded(true);
        setData(request);
    }catch(e){
        console.log(e.response);
        setData(e.response);
    }
    setLoaded(true);
};

export default GetHabits;