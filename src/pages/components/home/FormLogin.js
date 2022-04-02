import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Inputs, SingleInput, ButtonForm, SignLogin } from '../../../assets/styled-components/home/StyledHome';
import SignIn from '../../../utils/api-requests/Sign-in';
import UserContext from '../../../utils/use-contexts/UserContext';
import { ThreeDots } from 'react-loader-spinner';
function FormLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();
    async function login(e){
        e.preventDefault();
        setDisabled(true);
        const body = {
            email: email,
            password: password
        }
        const response = await SignIn(body);
        if(response.status < 400){
            setToken(response.token);
            const headers = {
                Authorization: `Bearer ${response.token}`,
                image: response.image,
                name: response.name
            };
            localStorage.setItem('headers', JSON.stringify(headers));
            navigate('/hoje');
        }
    }
    return(
        <Inputs>
            <form onSubmit={login}>
                <div className='email'>
                    <SingleInput type='email' value={email} onChange={e => setEmail(e.target.value)} 
                    placeholder='email' disabled={disabled} required/>
                </div>
                <div className='senha'>
                    <SingleInput type='password' value={password} onChange={e => setPassword(e.target.value)} 
                    placeholder='senha' disabled={disabled} required/>
                </div>
                <div className='btn-login'>
                    <ButtonForm disabled={disabled}>
                        {!disabled && <p>Entrar</p>}
                        {disabled && <ThreeDots color="#FFFFFF" height="100%" width="70" />}
                    </ButtonForm>
                </div>
            </form>
            <Link to='/cadastro'><SignLogin><p>Não tem uma conta? Cadastre-se</p></SignLogin></Link>
        </Inputs>
    );
}
export default FormLogin;