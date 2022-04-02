import FormCadastro from "./components/home/FormCadastro";
import { Container, AreaForm } from '../assets/styled-components/home/StyledHome';
import InitialLogo from './components/home/InitialLogo';
import styled from "styled-components";
function Cadastro(){
    return (
        <SectionSignUp>
            <Container>
                <AreaForm>
                    <InitialLogo />
                    <FormCadastro />
                </AreaForm>
            </Container>
        </SectionSignUp>
    );
}

const SectionSignUp = styled.section`
    padding-bottom: 30px;
`;

export default Cadastro;