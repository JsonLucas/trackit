import { Fragment, useState } from 'react';
import * as AddHabit from '../../../assets/styled-components/habitos/add-habit';
import SaveHabit from './SaveHabit';
function SectionAddHabit(){
    const [toggleCard, setToggler] = useState(false);
    const [cont, setCont] = useState(0);
    function toggleCardSaveHabit(){
        if(cont%2 === 0){
            setToggler(true);
        }else{
            setToggler(false);
        }
        setCont(cont+1);
    }
    return (
        <Fragment>
            <section className="section-add-habit">
                <AddHabit.Container>
                    <AddHabit.Row>
                        <AddHabit.RowSubtitle><p>Meus hábitos</p></AddHabit.RowSubtitle>
                        <AddHabit.AddButton onClick={toggleCardSaveHabit}>
                            <ion-icon name="add-outline"></ion-icon>
                        </AddHabit.AddButton>
                    </AddHabit.Row>
                    <SaveHabit isActive={toggleCard} unsetActive={setToggler} cont={cont} setCont={setCont} />
                </AddHabit.Container>
            </section>
        </Fragment>
    );
}
export default SectionAddHabit;