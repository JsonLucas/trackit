import { Fragment, useContext, useEffect, useState } from "react";
import { Row, RowSubtitle } from '../assets/styled-components/habitos/add-habit';
import { RowCard, Message } from '../assets/styled-components/habitos/container-habits';
import { useNavigate } from "react-router";
import UserContext from "../utils/use-contexts/UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from './components/Loading';
import AxiosConfig from '../utils/api-requests/AxiosConfig';

function History() {
    const { token, setToken } = useContext(UserContext);
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const localToken = JSON.parse(localStorage.getItem('headers'));
    const navigate = useNavigate();
    useEffect(() => {
        if (localToken.Authorization !== '') {
            if (token === '') {
                setToken(localToken.Authorization);
            }
        } else {
            navigate('/');
        }
    });
    useEffect(async () => {
        try {
            const config = {
                headers: {
                    Authorization: localToken.Authorization
                }
            };
            const request = await AxiosConfig.get('/habits/history/daily', config);
            setData(request);
            setLoaded(true);
            console.log(request.statusText);
        } catch (e) {
            console.log(e.message);
        }
    }, []);
    return (
        <Fragment>
            <Header />
            <Row>
                <RowSubtitle><p>Histórico</p></RowSubtitle>
            </Row>
            {!loaded && <Loading />}
            {loaded &&
                <Fragment>
                    <RowCard>
                        <Message>
                            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                        </Message>
                    </RowCard>
                    <Footer />
                </Fragment>
            }
        </Fragment>
    );
}

export default History;
