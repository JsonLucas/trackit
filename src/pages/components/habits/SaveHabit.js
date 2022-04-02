import { SingleDay, SingleCard, Buttons, SingleButton, WeekDays, RowContainerCard } from '../../../assets/styled-components/habitos/container-habits';
import { useState, useContext } from 'react';
import { SingleInput } from '../../../assets/styled-components/home/StyledHome';
import { ThreeDots } from 'react-loader-spinner';
import AxiosConfig from '../../../utils/api-requests/AxiosConfig';
import UserContext from '../../../utils/use-contexts/UserContext';
function SaveHabit({ isActive, unsetActive, cont, setCont }) {
    const [toggleWeekDay, setToggler] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState('');
    const [disabled, setDisabled] = useState(false);
    const { token } = useContext(UserContext);
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    let isSelected = [false, false, false, false, false, false, false], auxSelectedDays = [];
    function toggler(e) {
        const accessKey = parseInt(e.target.accessKey);
        if (!isSelected[accessKey]) {
            auxSelectedDays = [...selectedDays, accessKey];
            isSelected[accessKey] = true;
        } else {
            isSelected[accessKey] = false;
        }
        setToggler(isSelected);
        setSelectedDays(auxSelectedDays);
    }
    async function saveHabit(e) {
        e.preventDefault();
        try {
            setDisabled(true);
            if (selectedDays.length !== 0) {
                const body = {
                    name: habitName,
                    days: selectedDays
                };
                const config = {
                    headers: {
                        Authorization: token
                    }
                };
                const request = await AxiosConfig.post('/habits', body, config);
                console.log(request);
                alert('Hábito cadastrado com sucesso!');
            } else {
                alert('Selecione pelo menos um dia para seu hábito.');
            }
        } catch (e) {
            console.log(e.response);
            alert(`Hábito não cadastrado: ${e.response.statusText}`);
        }
        window.location.reload();
        setDisabled(false);
        setCont(cont + 1);
        unsetActive(false);
    }
    function cancelCreation(e){
        e.preventDefault();
        setDisabled(false);
        setCont(cont + 1);
        unsetActive(false)
    }
    return (
        <RowContainerCard isActive={isActive}>
            <SingleCard>
                <form onSubmit={saveHabit}>
                    <SingleInput value={habitName} type='text' placeholder='nome do hábito'
                        onChange={e => setHabitName(e.target.value)} disabled={disabled} required />
                    <WeekDays>
                        {weekDays.map((item, index) =>
                            <SingleDay key={`weekday-${item}-${index}`} onClick={toggler}
                                isActive={isSelected[index]} accessKey={index}>{item}</SingleDay>)}
                    </WeekDays>
                    <Buttons>
                        <SingleButton onClick={cancelCreation} disabled={disabled} identifier='cancel'>Cancelar</SingleButton>
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