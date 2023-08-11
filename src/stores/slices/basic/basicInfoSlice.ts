import { RootState } from '@/stores/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BasicInfo } from './interfaces'
import resumeData from '../../resume-data.json'


const initialState: BasicInfo = resumeData.basics

export const basicInfoSlice = createSlice({
    name: 'basicInfoReducer',
    initialState,
    reducers: {
        updateBasicInfo: (state, action: PayloadAction<BasicInfo>) => {
            return action.payload
        },

        resetBasicInfo: (state) => {
            return initialState
        }
    },
})

export const {
    updateBasicInfo,
    resetBasicInfo
} = basicInfoSlice.actions

export const selectBasicInfo = (state: RootState) => state.basicInfoReducer

export default basicInfoSlice.reducer