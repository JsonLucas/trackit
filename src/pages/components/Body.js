import { Fragment, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import SectionAddHabit from './habits/SectionAddHabit';
import BodyHabits from './habits/BodyHabits';
import UserContext from '../../utils/use-contexts/UserContext';
function Body(){
    const {token, setToken} = useContext(UserContext);
    const localToken = JSON.parse(localStorage.getItem('headers'));
    const navigate = useNavigate();
    useEffect(() => {
        if(localToken.Authorization !== ''){
            if(token === ''){
                setToken(localToken.Authorization);
            }
        }else{
            navigate('/');
        }
    });
    return (
        <Fragment>
            <SectionAddHabit />
            <BodyHabits />
        </Fragment>
    );
}

export default Body;