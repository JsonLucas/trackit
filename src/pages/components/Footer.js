import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../utils/use-contexts/UserContext';
import * as Ft from '../../assets/styled-components/footer';
import "react-circular-progressbar/dist/styles.css";
function Footer(){
    const {completedTasks, numTasks} = useContext(UserContext);
    let percentage;
    useEffect(() => {
        percentage = Math.floor((completedTasks*100)/numTasks);
    })
    return (
        <Ft.Footer>
            <Ft.Container>
                <Link to='/habitos'>
                    <Ft.Btn>
                        <Ft.BtnHabits>Hábitos</Ft.BtnHabits>
                    </Ft.Btn>
                </Link>
                <Link to='/hoje'>
                    <Ft.CircularProgress>
                        <CircularProgressbar value={percentage} text='Hoje' background={true} />
                    </Ft.CircularProgress>
                </Link>
                <Link to='/historico'>
                    <Ft.Btn>
                        <Ft.BtnHabits>Histórico</Ft.BtnHabits>
                    </Ft.Btn>
                </Link>
            </Ft.Container>
        </Ft.Footer>
    );
}

export default Footer;
