import AxiosConfig from './AxiosConfig';
const CreateHabit = async (body, auth) => {
    const config = {
        headers: {
            Authorization: auth
        }
    };
    const request = AxiosConfig.post('/habits', body, config);
    await request.then((response) => {
        console.log(response);
        alert('Hábito cadastrado com sucesso!');
    }).catch((error) => {
        console.log(error.response);
        alert(`Hábito não cadastrado: ${error.response.statusText}`);
    });
}

export default CreateHabit;