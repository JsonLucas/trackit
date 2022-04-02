import { Fragment, useContext, useEffect, useState } from "react";
import AxiosConfig from "../../../utils/api-requests/AxiosConfig";
import UserContext from "../../../utils/use-contexts/UserContext";
import Loading from "../Loading";
import ToDaysToDo from "./ToDaysToDo";
function ToDaysCards(){
    const [loaded, setLoaded] = useState(false);
    const [todaysData, setData] = useState({});
    const {token} = useContext(UserContext);
    useEffect(async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try{
            const request = await AxiosConfig.get('/habits/today', config);
            setData(request);
            setLoaded(true);
            console.log(request);
        }catch(error){
            console.log(error);
            setData(error);
            setLoaded(true);
        }
    }, []);
    return (
        <Fragment>
            {!loaded && <Loading />}
            {loaded && <ToDaysToDo data={todaysData} />}
        </Fragment>
    );
}

export default ToDaysCards;