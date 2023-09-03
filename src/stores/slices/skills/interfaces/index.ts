import { ISkillsItem } from "../../experiences/interfaces";

export interface SkillsTools {
    title: string;
    uiRelated?: ISkillsItem[];
    frontendRelated?: ISkillsItem[];
    backendRelated?: ISkillsItem[];
    coderRelated?: ISkillsItem[];
    designerRelated?: ISkillsItem[];
}
