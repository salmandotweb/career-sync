import { RootState } from '@/stores/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IExperienceItem } from './interfaces'
import resumeData from '../../initialData/resume-data.json'


const initialState: IExperienceItem[] = resumeData.experience

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        updateExperience: (state, action: PayloadAction<{ index: number, updatedInfo: IExperienceItem }>) => {
            const { index, updatedInfo } = action.payload
            state[index] = updatedInfo
        }
    },
})

export const {
    updateExperience
} = experienceSlice.actions

export const selectExperience = (state: RootState) => state.experienceReducer

export default experienceSlice.reducer