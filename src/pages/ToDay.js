import { Fragment, useContext } from "react";
import { useNavigate } from "react-router";
import { Container } from "../assets/styled-components/hoje/today-subtitle";
import UserContext from "../utils/use-contexts/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDaysCards from "./components/today/ToDaysCards";
import ToDaysSubtitle from "./components/today/ToDaysSubtitle";

function ToDay(){
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    if(token !== ''){
        return (
            <Fragment>
                <Header />
                <Container>
                    <ToDaysSubtitle />
                    <ToDaysCards />
                </Container>
                <Footer />
            </Fragment>
        );
    }else{
        return (<Fragment>{navigate('/')}</Fragment>);
    }
}
export default ToDay;