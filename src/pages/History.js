import { Fragment, useContext } from "react";
import { useNavigate } from "react-router";
import { Container, Row, RowSubtitle } from '../assets/styled-components/habitos/add-habit';
import { RowCard, Message } from '../assets/styled-components/habitos/container-habits';
import UserContext from "../utils/use-contexts/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

function History(){
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    if(token !== ''){
        return (
            <Fragment>
                <Header />
                <Container>
                    <Row>
                        <RowSubtitle><p>Histórico</p></RowSubtitle>
                    </Row>
                    <RowCard>
                        <Message>
                            <p>Você não tem nenhum hábito cadastrado ainda. 
                                Adicione um hábito para começar a trackear!</p>
                        </Message>
                    </RowCard>
                </Container>
                <Footer />
            </Fragment>
        );
    }else{
        return (<Fragment>{navigate('/')}</Fragment>);
    }
}
export default History;
