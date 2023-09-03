import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basicInfoSlice from './slices/prisma/basic/basicInfoSlice'
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
import educationSlice from './slices/prisma/education/educationSlice'
import experienceSlice from './slices/prisma/experiences/experienceSlice'
import featuredProjectSlice from './slices/prisma/featuredProject/featuredProjectSlice'
import { skillSlice } from './slices/prisma/skills/educationSlice'


const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducers = combineReducers({
    template: templateSlice,
    basicInfoReducer: basicInfoSlice,
    educationReducer: educationSlice,
    experienceReducer: experienceSlice,
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