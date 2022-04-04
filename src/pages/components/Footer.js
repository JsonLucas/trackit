import { CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/use-contexts/UserContext';
import * as Ft from '../../assets/styled-components/footer';
function Footer(){
    const {completedTasks, numTasks} = useContext(UserContext);
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
                        {numTasks > 0 
                            ? <CircularProgressbar value={Math.floor((completedTasks/numTasks)*100)} text='Hoje' background={true} />
                            : <CircularProgressbar value='0' text='Hoje' background={true} />
                        }
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
