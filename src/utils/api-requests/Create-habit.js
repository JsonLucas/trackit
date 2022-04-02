import AxiosConfig from './AxiosConfig';
const CreateHabit = async (body, auth) => {
    try{
        const config = {
            headers: {
                Authorization: auth
            }
        };
        const request = await AxiosConfig.post('/habits', body, config);
        console.log(request);
        alert('Hábito cadastrado com sucesso!');
    }catch(e){
        console.log(e.response);
        alert(`Hábito não cadastrado: ${e.response.statusText}`);
    }
}

export default CreateHabit;