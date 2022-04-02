import AxiosConfig from "./AxiosConfig";
export const DeleteHabit = async (idHabit, auth) => {
    const config = {
        headers: {
            Authorization: auth
        }
    }
    const request = AxiosConfig.delete(`/habits/${idHabit}`, config);
    await request.then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error.response);
    });
}