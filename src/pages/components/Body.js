import { Fragment, useContext } from 'react';
import SectionAddHabit from './habits/SectionAddHabit';
import BodyHabits from './habits/BodyHabits';
import { useNavigate } from 'react-router';
import UserContext from '../../utils/use-contexts/UserContext';
function Body(){
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    if(token !== ''){
        return (
            <Fragment>
                <SectionAddHabit />
                <BodyHabits />
            </Fragment>
        );
    }else{
        return (<Fragment>{navigate('/')}</Fragment>);
    }
}

export default Body;