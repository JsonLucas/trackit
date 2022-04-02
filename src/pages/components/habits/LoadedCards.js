import { Fragment } from 'react';
import { RowCard, Message } from '../../../assets/styled-components/habitos/container-habits';
import SingleCard from './SingleCard';
function LoadedCards({data}){
    const message = 
    <RowCard>
        <Message>
            <p>Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!</p>
        </Message>
    </RowCard>;
    if(data.status < 400){
        if(data.data.length !== 0){
            return (
                <Fragment>
                    <SingleCard days={data.data} />
                </Fragment>
            );
        }else{
            return (
                <Fragment>
                    {message}
                </Fragment>
            );
        }
    }else{
        return(
            <RowCard>
                <Message>
                    <p>Algum erro ocorreu, por favor, tente novamente.</p>
                </Message>
            </RowCard>
        );
    }
}

export default LoadedCards;