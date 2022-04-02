import AxiosConfig from './AxiosConfig';
const SignUp = (body) => {
    let res = {
        statusCode: 200,
        data: {}
    };
    const request = AxiosConfig.post('/auth/sign-up', body);
    request.then((response) => {
        res.data = response.data;
        res.statusCode = response.status;
    }).catch((error) => {
        console.log(error.response);
        res.statusCode = error.response.status;
        alert(`Cadastro não efetuado: ${error.response.data.message}`);
    });
    return res;
}
//409 -> usuario ja cadastrado.
//422 -> algum campo invalido.
export default SignUp;