import { Fragment, useContext, useEffect, useState } from 'react';
import { ContainerHabits } from '../../../assets/styled-components/habitos/container-habits';
import GetHabits from '../../../utils/api-requests/Get-habits';
import UserContext from '../../../utils/use-contexts/UserContext';
import Loading from '../Loading';
import LoadedCards from './LoadedCards';
function BodyHabits(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({});
    const {token, setToken} = useContext(UserContext);
    const localToken = JSON.parse(localStorage.getItem('headers'));
    useEffect(() => {
        if(token === ''){
            setToken(localToken.Authorization);
        } 
    });
    useEffect(() => {
        GetHabits(localToken.Authorization, setLoaded, setData);
    }, []);
    return(
        <Fragment>
            {!loaded && <Loading />}
            {loaded && 
            <ContainerHabits>
                <LoadedCards data={data} />
            </ContainerHabits>}
        </Fragment>
    );
}

export default BodyHabits;