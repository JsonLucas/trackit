import AxiosConfig from "./AxiosConfig";
const GetTodaysHabits = async (auth, setLoaded, setData) => {
    const config = {
        headers: {
            Authorization: auth
        }
    }
    try{
        const request = await AxiosConfig.get('/habits/today', config);
        setData(request);
        setLoaded(true);
    }catch(error){
        console.log(error.response);
    }
}

export default GetTodaysHabits;