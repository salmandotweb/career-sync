export interface IExperienceItem {
    id: string;
    name: string;
    position: string;
    joiningDate: string;
    endDate: string;
    currentlyWorkHere: boolean
    skills: ISkillsItem[];
    responsibilities: string[];
}

export interface ISkillsItem {
    id: string;
    name: string;
}