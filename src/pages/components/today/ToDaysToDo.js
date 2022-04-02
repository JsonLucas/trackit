import AxiosConfig from "../../../utils/api-requests/AxiosConfig";
import { Fragment, useContext, useEffect } from "react";
import { RowCard, Message } from "../../../assets/styled-components/habitos/container-habits";
import { CardToDo, Checked, InfoSequence, TextInfo, TitleToDo, Wrapper } from "../../../assets/styled-components/hoje/todays-todo";
import UserContext from "../../../utils/use-contexts/UserContext";
function ToDaysToDo({data}){
    const {token, completedTasks, setCompletedTasks, setNumTasks} = useContext(UserContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    async function cheked(e){
        const idHabit = e.target.accessKey;
        try{
            //const request = await AxiosConfig.post(`/habits/${idHabit}/check`, {}, config);
            const request = await AxiosConfig.post(`/habits/${idHabit}/uncheck`, {}, config);
            setCompletedTasks(completedTasks-1);
            console.log(request);
        }catch(e){
            console.log(e.message);
        }
    }
    useEffect(() => {
        try{
            setNumTasks(data.data.length);
            const numCompleted = data.data.filter((item) => {
                if(item.done){
                    return true;
                }else{
                    return false;
                }
            });
            setCompletedTasks(completedTasks + (numCompleted.length));
        }catch(e){
            console.log(e.message);
        }
    }, []);
    if(data.status < 400){
        if(data.data.length !== 0){
            return (
                <Fragment>
                    {data.data.map(item => 
                        <RowCard key={item.id}>
                            <CardToDo>
                                <Wrapper>
                                    <TitleToDo>{item.name}</TitleToDo>
                                    <InfoSequence>
                                        <TextInfo isDone={item.done}>Sequência atual: <p> {item.currentSequence} dia(s)</p> </TextInfo>
                                        {item.currentSequence >= item.highestSequence 
                                        ? <TextInfo isDone={item.done}>Seu recorde: <p> {item.highestSequence} dia(s)</p></TextInfo>
                                        : <TextInfo>Seu recorde: {item.highestSequence} dias</TextInfo> }
                                    </InfoSequence>
                                </Wrapper>
                                <Checked onClick={cheked} isDone={item.done} accessKey={item.id}>
                                    <ion-icon name="checkmark-outline"></ion-icon></Checked>
                            </CardToDo>
                        </RowCard>
                    )}
                </Fragment>
            );
        }else{
            return (
                <RowCard>
                    <Message><p>Você não tem nenhum hábito cadastrado para hoje.</p></Message>
                </RowCard>
            );
        }
    }else{
        return (
            <RowCard>
                <Message><p>Falha ao carregar os hábitos de hoje. Tente novamente.</p></Message>
            </RowCard>
        );
    }
}
export default ToDaysToDo;