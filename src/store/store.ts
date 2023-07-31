import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from './reducers/UserSlice'
import counterReducer from './reducers/CounterSlice'
import { postAPI } from "../services/PostService"

const rootReducer = combineReducers({
    userReducer,
    counterReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']