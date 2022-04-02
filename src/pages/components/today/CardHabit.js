import { SingleDay, SingleCard, WeekDays, DeleteHabit, TextHabit } from '../../../assets/styled-components/habitos/container-habits';
function CardHabit(){
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const activeDay = [false, true, false, true, false, true, false];
    return (
        <SingleCard>
            <DeleteHabit><ion-icon name="trash-outline"></ion-icon></DeleteHabit>
            <TextHabit>Texto do habito aki</TextHabit>
            <WeekDays>
                {weekDays.map((item, index) => 
                <SingleDay key={`weekday-${item}-${index}`} isActive={activeDay[index]}>{item}</SingleDay>)}
            </WeekDays>
        </SingleCard>    
    );
}

export default CardHabit;