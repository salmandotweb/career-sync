export interface IExperienceItem {
    id: string;
    name: string;
    companyLogo?: string;
    position: string;
    joiningDate: string;
    endDate: string | null;
    currentlyWorkHere: boolean
    skills: ISkillsItem[];
    responsibilities: Responsibility[];
    location?: string;
    hide?: boolean;
}

export interface ISkillsItem {
    id: string | number;
    logo?: string;
    name: string;
}

export interface Responsibility {
    id: string;
    responsibility: string;
}