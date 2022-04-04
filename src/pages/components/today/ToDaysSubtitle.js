import { MainSubtitle, OtherSubtitle, ToDaySubtitle } from "../../../assets/styled-components/hoje/today-subtitle";
import { useContext } from "react";
import UserContext from "../../../utils/use-contexts/UserContext";
import * as dayJs from 'dayjs';
function ToDaysSubtitle() {
    const halfDate = {
        weekDays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    };
    let date = '';
    date += halfDate.weekDays.find((item, index) => {
        if (index === dayJs().day()) {
            return `${item}`;
        }
    });
    new Date().getDate() < 10 
    ? date += `, 0${new Date().getDate()}/`
    : date += `, ${new Date().getDate()}/`;
    date += halfDate.months.find((item, index) => {
        if (index === dayJs().month()) {
            return `${item}`;
        }
    });
    const {completedTasks, numTasks} = useContext(UserContext);
    const percentage = Math.floor((completedTasks/numTasks)*100);
    return (
        <ToDaySubtitle>
            <MainSubtitle>{date}</MainSubtitle>
            {completedTasks === 0 
            ? <OtherSubtitle someConcluded={false}><p>Nenhum hábito concluído ainda</p></OtherSubtitle> 
            : <OtherSubtitle someConcluded={true}><p>{percentage}% dos hábitos concluídos</p></OtherSubtitle>}
        </ToDaySubtitle>
    );
}

export default ToDaysSubtitle;