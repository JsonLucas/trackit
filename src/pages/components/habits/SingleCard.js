import { Fragment, useState } from 'react';
import { SingleDay, SingleCard as Card, WeekDays, RowCard, TextHabit, DeleteHabit as Delete } from '../../../assets/styled-components/habitos/container-habits';
import AxiosConfig from '../../../utils/api-requests/AxiosConfig';
function SingleCard({ days }) {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    function isSelected(array, element) {
        if (array.find((item) => item === element) !== undefined) {
            return true;
        } else {
            return false;
        }
    }
    async function deleteHabit(e) {
        const confirmation = window.confirm('você deseja realmente apagar este hábito?');
        try {
            if (confirmation) {
                const auth = JSON.parse(localStorage.getItem('headers'));
                const idHabit = e.target.accessKey;
                const config = {
                    headers: {
                        Authorization: auth.Authorization
                    }
                }
                const request = await AxiosConfig.delete(`/habits/${idHabit}`, config);
                console.log(request.statusText);
                alert('Hábito excluído com sucesso!');
                window.location.reload();
            }
        }catch(e){
            console.log(e.response.status);
            alert('Falha ao deletar esse hábito.');
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
                                isActive={isSelected(element.days, j)} accessKey={j}>{item}</SingleDay>
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