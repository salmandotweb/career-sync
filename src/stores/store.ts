import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basicInfoSlice from './slices/basic/basicInfoSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import templateSlice from './slices/templates/templateSlice'
import { experienceSlice } from './slices/experiences/experienceSlice'

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducers = combineReducers({
    template: templateSlice,
    basicInfoReducer: basicInfoSlice,
    experienceReducer: experienceSlice.reducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch