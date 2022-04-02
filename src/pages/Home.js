import { Container, AreaForm } from '../assets/styled-components/home/StyledHome';
import FormLogin from './components/home/FormLogin';
import InitialLogo from './components/home/InitialLogo';
function Home(){
    return (
        <section className='section-login'>
            <Container>
                <AreaForm>
                    <InitialLogo />
                    <FormLogin />
                </AreaForm>
            </Container>
        </section>
    );
}
export default Home;