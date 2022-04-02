import { Fragment, useState } from 'react';
import { SingleDay, SingleCard as Card, WeekDays, RowCard, TextHabit, DeleteHabit as Delete } from '../../../assets/styled-components/habitos/container-habits';
import {DeleteHabit as DelHabit} from '../../../utils/api-requests/DeleteHabit';
function SingleCard({days}){
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    function teste(array, element){
        if(array.find((item) => item === element) !== undefined){
            return true;
        }else{
            return false;
        }
    }
    function deleteHabit(e){
        const confirmation = window.confirm('você deseja realmente apagar este hábito?');
        if(confirmation){
            const auth = JSON.parse(localStorage.getItem('headers'));
            const idHabit = e.target.accessKey;
            DelHabit(idHabit, auth.Authorization);
        }
    }
    return (
        <Fragment>
            {days.map((element, i) => <RowCard key={`${element.name}-${i}`}>
                <Card>
                    <TextHabit>{element.name}</TextHabit>
                    <WeekDays>
                        {weekDays.map((item, j) => 
                            <SingleDay key={`weekday-${item}-${j}`}
                            isActive={teste(element.days, j)} accessKey={j}>{item}</SingleDay>
                            )
                        }
                    </WeekDays>
                    <Delete>
                        <ion-icon name="trash-outline" accessKey={element.id} onClick={deleteHabit}></ion-icon>
                    </Delete>
                </Card>
            </RowCard>)}
        </Fragment>
          
    );
}

export default SingleCard;