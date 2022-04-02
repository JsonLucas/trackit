import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container } from "../assets/styled-components/hoje/today-subtitle";
import UserContext from "../utils/use-contexts/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDaysCards from "./components/today/ToDaysCards";
import ToDaysSubtitle from "./components/today/ToDaysSubtitle";

function ToDay(){
    const {token, setToken} = useContext(UserContext);
    const localToken = JSON.parse(localStorage.getItem('headers'));
    const navigate = useNavigate();
    useEffect(() => {
        if(localToken.Authorization !== ''){
            if(token === ''){
                setToken(localToken.Authorization);
            }
        }else{
            navigate('/');
        }
    });
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
}
export default ToDay;