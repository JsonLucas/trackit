import { requester } from "../config/axios";
import { SignIn, SignUp } from "../interfaces/user";

export const signInRequest = async (body: SignIn) => {
    const { data } = await requester.post('/user/sign-in', body);
    return data;
}

export const signUpRequest = async (body: SignUp) => {
    const { data } = await requester.post('/user/sign-up', body);
    return data;
}