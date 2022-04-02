import AxiosConfig from './AxiosConfig';
import UserContext from '../use-contexts/UserContext';
const SignIn = async (body) => {
    let res = {};
    const request = AxiosConfig.post('/auth/login', body);
    await request.then((response) => {
        const {token, image, name} = response.data;
        const {status} = response;
        res = {token, image, name, status};
        alert('Login efetuado com sucesso!');
    }).catch((error) => {
        console.log(error.response);
        res.status = error.response.status;
        alert(`Login não efetuado: ${error.response.data.message}`);
    });
    return res;
}

export default SignIn;