import { SingleDay, SingleCard, Buttons, SingleButton, WeekDays, RowContainerCard } from '../../../assets/styled-components/habitos/container-habits';
import { useState, useContext } from 'react';
import { SingleInput } from '../../../assets/styled-components/home/StyledHome';
import { ThreeDots } from 'react-loader-spinner';
import CreateHabit from '../../../utils/api-requests/Create-habit';
import UserContext from '../../../utils/use-contexts/UserContext';
function SaveHabit({isActive, unsetActive, cont, setCont}){
    const [toggleWeekDay, setToggler] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState('');
    const [disabled, setDisabled] = useState(false); 
    function toggler(e){
        const accessKey = parseInt(e.target.accessKey);
        if(!isSelected[accessKey]){
            auxSelectedDays = [...selectedDays, accessKey];
            isSelected[accessKey] = true;
        }else{
            isSelected[accessKey] = false;
        }
        setToggler(isSelected);
        setSelectedDays(auxSelectedDays);
    }
    async function saveHabit(e){
        e.preventDefault();
        setDisabled(true);
        if(selectedDays.length !== 0){
            const body = {
                name: habitName,
                days: selectedDays
            }
            await CreateHabit(body, `Bearer ${token}`);
        }else{
            alert('Selecione pelo menos um dia para seu hábito.');
        }
        setDisabled(false);
        setCont(cont+1);
        unsetActive(false)
    }
    const {token} = useContext(UserContext);
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    let isSelected = [false, false, false, false, false, false, false], auxSelectedDays = [];
    return (
        <RowContainerCard isActive={isActive}>
            <SingleCard>
                <form onSubmit={saveHabit}>
                    <SingleInput value={habitName} type='text' placeholder='nome do hábito'
                    onChange={e => setHabitName(e.target.value)} disabled={disabled} required />
                    <WeekDays>
                        {weekDays.map((item, index) => 
                        <SingleDay key={`weekday-${item}-${index}`} onClick={toggler} 
                        isActive={toggleWeekDay[index]} accessKey={index}>{item}</SingleDay>)}
                    </WeekDays>
                    <Buttons>
                        <SingleButton disabled={disabled} identifier='cancel'>Cancelar</SingleButton>
                        <SingleButton disabled={disabled} identifier='save'>
                            {!disabled && <p>Entrar</p>}
                            {disabled && <ThreeDots color="#FFFFFF" height="100%" width="70" />}
                        </SingleButton>
                    </Buttons>
                </form>
            </SingleCard>
        </RowContainerCard>    
    );
}

export default SaveHabit;