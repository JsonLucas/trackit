import { IHabit } from "../../interfaces/habit";

export const GET_HABITS = 'GET_HABITS';

export const getHabitsAction = (habits: IHabit[]) => {
    return {
        type: GET_HABITS,
        habits
    }
}