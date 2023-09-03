import { configureStore } from '@reduxjs/toolkit'
import { habitsReducer } from './reducers/habitsReducer'
// ...

export const store = configureStore({
    reducer: {
        habitsReducer
    },
})
