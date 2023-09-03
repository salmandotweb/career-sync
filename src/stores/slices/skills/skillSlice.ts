import { RootState } from "@/stores/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import resumeData from '../../initialData/resume-data.json'
import { SkillsTools } from "./interfaces";

const initialState: SkillsTools[] = resumeData.skillsTools

export const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        updateSkills: (state, action: PayloadAction<{ index: number, updatedInfo: SkillsTools }>) => {
            const { index, updatedInfo } = action.payload;
            state[index] = updatedInfo;
        }
    }
});

export const {
    updateSkills,
} = skillSlice.actions;

export const selectSkills = (state: RootState) => state.skillsReducer;

export default skillSlice.reducer;
