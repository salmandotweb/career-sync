import { RootState } from "@/stores/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Education } from "./interfaces";
import resumeData from '../../initialData/resume-data.json'

const initialState: Education[] = resumeData.education

export const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        updateEducation: (state, action: PayloadAction<{ index: number, updatedInfo: Education }>) => {
            const { index, updatedInfo } = action.payload
            state[index] = updatedInfo
        }
    },
});

export const {
    updateEducation,
} = educationSlice.actions;

export const selectEducation = (state: RootState) => state.educationReducer;

export default educationSlice.reducer;
