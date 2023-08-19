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
import featuredProjectSlice from './slices/featuredProject/featuredProjectSlice'
import educationSlice from './slices/education/educationSlice'
import { skillSlice } from './slices/skills/educationSlice'

const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1,
}

const rootReducers = combineReducers({
    template: templateSlice,
    basicInfoReducer: basicInfoSlice,
    educationReducer: educationSlice,
    experienceReducer: experienceSlice.reducer,
    featuredProjectReducer: featuredProjectSlice,
    skillsReducer: skillSlice.reducer,
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