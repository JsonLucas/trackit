import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Inputs, SingleInput, ButtonForm, SignLogin } from '../../../assets/styled-components/home/StyledHome';
import SignUp from '../../../utils/api-requests/Sign-up';
function FormCadastro(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    function signUp(e){
        e.preventDefault();
        setDisabled(true);
        if((image.substring(0, 7).toLowerCase() === 'http://') || 
        (image.substring(0, 8) === 'https://')){
            const body = {
                email: email,
                name: name,
                image: image,
                password: password
            };
            const response = SignUp(body);
            if(response.statusCode < 400){
                alert('Cadastrado efetuado com sucesso!');
                navigate('/');
            }
        }else{
            alert('insira um formato de imagem válido.');
            setImage('');
        }
        setDisabled(false);
    }
    return(
        <Inputs>
            <form onSubmit={signUp}>
                <div className='email'>
                    <SingleInput type='email' disabled={disabled} value={email} 
                    onChange={e => setEmail(e.target.value)} placeholder='email' required/>
                </div>
                <div className='password'>
                    <SingleInput type='password' disabled={disabled} value={password} 
                    onChange={e => setPassword(e.target.value)} placeholder='senha' required/>
                </div>
                <div className='name'>
                    <SingleInput type='text' disabled={disabled} value={name} 
                    onChange={e => setName(e.target.value)} placeholder='nome' required/>
                </div>
                <div className='image'>
                    <SingleInput type='link' disabled={disabled} value={image} 
                    onChange={e => setImage(e.target.value)} placeholder='foto' required/>
                </div>
                <div className='btn-signup'>
                    <ButtonForm disabled={disabled}>
                        {!disabled && <p>Cadastrar</p>}
                        {disabled && <ThreeDots color='#FFF' height='100' width='70' />}                        
                    </ButtonForm>
                </div>
            </form>
            <Link to='/'><SignLogin><p>Já tem uma conta? Faça login!</p></SignLogin></Link>
        </Inputs>
    );
}
export default FormCadastro;