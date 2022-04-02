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
//https://thicc.mywaifulist.moe/waifus/39048/310f6abf24e58db8fc55b3f7528abd13c4ccf629151585e1084740e4996300c4_thumb.png
const SectionSignUp = styled.section`
    padding-bottom: 50px;
`;

export default Cadastro;