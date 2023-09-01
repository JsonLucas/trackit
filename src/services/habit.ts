import { requester } from "../config/axios";
import { Habit } from "../interfaces/habit";

export const createHabitRequest = async (body: Habit) => {
    const { data } = await requester.post('/habit/create', body);
    return data;
}

export const getHabits = async () => {
    const { data } = await requester.get('/habit');
    return data;
}