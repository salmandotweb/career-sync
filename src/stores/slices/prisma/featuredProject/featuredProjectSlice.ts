import { RootState } from '@/stores/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import resumeData from '../../../initialData/prisma/resume-data.json'
import { IFeaturedProjectItem } from './interfaces'


const initialState: IFeaturedProjectItem = resumeData.featuredProject

export const featuredProjectSlice = createSlice({
    name: 'featuredProject',
    initialState,
    reducers: {
        updateFeaturedProject: (state, action: PayloadAction<IFeaturedProjectItem>) => {
            state = action.payload
            return state
        }
    },
})

export const {
    updateFeaturedProject
} = featuredProjectSlice.actions

export const selectFeaturedProject = (state: RootState) => state.featuredProjectReducer

export default featuredProjectSlice.reducer