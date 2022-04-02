import AxiosConfig from './AxiosConfig';
const SignUp = async (body) => {
    try{
        const request = await AxiosConfig.post('/auth/sign-up', body);
        console.log(request.statusText);
    }catch(e){
        console.log(e);
        alert(`Cadastro não efetuado: ${e.message}`);
    }
}

export default SignUp;