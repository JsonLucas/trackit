import { IHabit } from "../../interfaces/habit"
import { GET_HABITS } from "../actions/habitsAction"

const INITIAL_STATE = {
    habits: [] as IHabit[]
}

export const habitsReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case GET_HABITS:
            return {
                ...state,
                habits: action.habits
            }
        default: return state;
    }
}