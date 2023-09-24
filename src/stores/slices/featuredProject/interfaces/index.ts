import { ISkillsItem } from "../../experiences/interfaces";

export interface IFeaturedProjectItem {
  projectName: string;
  skills: ISkillsItem[];
  description: string;
  projectLink: string;
  portfolioLink: string;
}
