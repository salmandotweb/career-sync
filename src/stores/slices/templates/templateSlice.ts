import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITemplate, ITemplateContent } from "./interfaces/templates";
import { AVAILABLE_TEMPLATES } from "@/lib/availableTemplates";

interface TemplateState {
  availableTemplate: ITemplate;
  activeTemplate: ITemplateContent;
}

const initialState: TemplateState = {
  availableTemplate: AVAILABLE_TEMPLATES,
  activeTemplate: AVAILABLE_TEMPLATES["prisma"],
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<ITemplateContent>) => {
      state.activeTemplate = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export const selectTemplate = (state: { template: TemplateState }) =>
  state.template.activeTemplate;

export default templateSlice.reducer;
