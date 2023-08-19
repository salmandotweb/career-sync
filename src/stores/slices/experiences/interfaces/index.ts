export interface IExperienceItem {
    id: string;
    name: string;
    position: string;
    joiningDate: string;
    endDate: string;
    currentlyWorkHere: boolean
    skills: ISkillsItem[];
    responsibilities: Responsibility[];
}

export interface ISkillsItem {
    id: string | number;
    name: string;
}

export interface Responsibility {
    id: string;
    responsibility: string;
}