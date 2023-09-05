import Gradient from "@/templates/Prisma/components/Gradient";
import { FC } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/stores/hooks";

import { BsCalendar2Minus } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { BsLink45Deg } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { formatDate } from "@/lib/utils";

import { selectFeaturedProject } from "@/stores/slices/featuredProject/featuredProjectSlice";
import { selectBasicInfo } from "@/stores/slices/basic/basicInfoSlice";
import { selectEducation } from "@/stores/slices/education/educationSlice";
import { selectExperience } from "@/stores/slices/experiences/experienceSlice";
import { selectSkills } from "@/stores/slices/skills/skillSlice";
import { IExperienceItem } from "@/stores/slices/experiences/interfaces";
import { SkillsTools } from "@/stores/slices/skills/interfaces";
import Link from "next/link";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";

interface indexProps {}

const Prisma: FC<indexProps> = ({}) => {
  const basicInfo = useAppSelector(selectBasicInfo);
  const education = useAppSelector(selectEducation);
  const experiences = useAppSelector(selectExperience);
  const featuredProject = useAppSelector(selectFeaturedProject);
  const skills = useAppSelector(selectSkills);

  const ActiveTemplate = useAppSelector(selectTemplate);

  const templateEducation = education.filter(
    (item) => item.type === "University",
  );

  return (
    <div
      className="bg-[#0F172A] h-[100%] w-[100%] text-white overflow-hidden"
      id="resume"
    >
      <div className="flex items-center justify-center flex-col h-[140px] w-full relative z-[100]">
        <Gradient />
        <h1 className="text-[28px] text-white font-bold">{basicInfo.name}</h1>
        <p className="text-[12px] text-[#CBD5E1]">{basicInfo.label}</p>
        <div className="flex items-center gap-3 mt-2 mb-3">
          <div className="flex items-center gap-1 text-[11px]">
            <FiMapPin />
            <p className="text-[#E2E8F0]">{basicInfo.location.city}</p>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <HiOutlineMail />
            <p className="text-[#E2E8F0]">{basicInfo.email}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-[11px]">
          {basicInfo.profiles.map((profile) => {
            return (
              profile.template?.includes(ActiveTemplate.id) && (
                <Link
                  href={profile.url}
                  className={`bg-[#F6F3FF] flex items-center justify-center rounded-[20px] px-2 gap-1 text-[#222]`}
                  key={profile.network}
                  target="_blank"
                >
                  {profile.network === "Linkedin" ? (
                    <BsLinkedin />
                  ) : profile.network === "Github" ? (
                    <AiFillGithub />
                  ) : profile.network === "Website" ? (
                    <HiOutlineGlobeAlt />
                  ) : null}

                  {profile.username}
                </Link>
              )
            );
          })}
        </div>
      </div>
      <Separator className="bg-[#334155]" />
      <div className="flex flex-col items-start justify-start w-[90%] mx-auto py-[20px] gap-4">
        {templateEducation?.map((education) => {
          return (
            <div
              className="grid grid-cols-[1fr,3.5fr,1fr] gap-2 items-start w-[100%]"
              key={education.type}
            >
              <h1 className="text-[#E2E8F0] text-[12px] font-medium">
                Education
              </h1>
              <h1 className="text-[#E2E8F0] text-[12px] font-medium">
                {education.degree} <span className="text-[#CBD5E1]"> - </span>
                <span className="text-[#E2E8F0] font-light">
                  {education.institution}
                </span>
              </h1>
              <div className="flex items-center gap-2 text-[8px] ml-auto">
                <BsCalendar2Minus />
                <h3 className="text-[#E2E8F0] text-[10px] font-medium whitespace-nowrap">
                  {education.startYear} -{" "}
                  {education.currentlyEnrolled ? "Present" : education.endYear}
                </h3>
              </div>
            </div>
          );
        })}

        <Separator className="bg-[#334155]" />
        <div className="grid grid-cols-[1fr,4.7fr] gap-1 items-start w-[100%]">
          <h1 className="text-[#E2E8F0] text-[12px] font-medium">Experience</h1>
          <div className="flex flex-col gap-2">
            {experiences?.map((experience) => {
              return (
                <>
                  <Experience {...experience} key={experience.id} />
                  {experience.id !== experiences[experiences.length - 1].id && (
                    <Separator className="bg-[#334155]" />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <Separator className="bg-[#334155]" />
        <div className="grid grid-cols-[1fr,4.5fr] gap-3 items-start w-full">
          <h1 className="text-[#E2E8F0] text-[12px] font-medium">
            Featured Project
          </h1>
          <div className="flex flex-col gap-1.5">
            <div className="grid grid-cols-[2fr,1fr] gap-1.5 items-start">
              <h1 className="text-[#E2E8F0] text-[12px] font-medium">
                {featuredProject.projectName}
              </h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              {featuredProject.skills?.map((skill) => {
                return <CustomBadge label={skill.name} key={skill.id} />;
              })}
            </div>
            <div className="flex flex-col gap-1 justify-start items-start mt-2">
              <Summary
                summary={featuredProject.description}
                link={featuredProject.projectLink}
              />

              <div className="flex items-center gap-1 mt-1 text-[11px]">
                <BsStars />{" "}
                <p className="text-[#CBD5E1] font-light">
                  See all of my projects on my portfolio:{" "}
                </p>
                <span className="underline inline-flex items-center gap-1 text-[#CBD5E1] font-light">
                  <BsLink45Deg /> {featuredProject.portfolioLink}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-[#334155]" />
        <div className="grid grid-cols-[1fr,4.5fr] gap-2 items-start w-full">
          <h1 className="text-[#E2E8F0] text-[12px] font-medium">
            Skills and Tools
          </h1>
          <div className="flex flex-col gap-2">
            {skills?.map((skill, index) => {
              return (
                <>
                  <Skills {...skill} />

                  {index !== skills.length - 1 && (
                    <Separator className="bg-[#334155]" />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prisma;

const Experience = ({
  name,
  position,
  joiningDate,
  endDate,
  currentlyWorkHere,
  skills,
  responsibilities,
}: IExperienceItem) => {
  return (
    <div className="flex flex-col gap-1.5 w-[100%]">
      <div className="grid grid-cols-[2fr,1fr] gap-2 items-start w-[100%]">
        <h1 className="text-[#E2E8F0] text-[12px] font-medium">
          {name} <span className="text-[#CBD5E1]"> - </span>
          <span className="text-[#E2E8F0] font-light">{position}</span>
        </h1>
        <div className="flex items-center gap-2 text-[8px] ml-auto">
          <BsCalendar2Minus />
          <h3 className="text-[#E2E8F0] text-[10px] font-medium whitespace-nowrap">
            {formatDate(new Date(joiningDate))} -{" "}
            {currentlyWorkHere
              ? "Present"
              : formatDate(new Date(endDate ?? new Date()))}
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3">
        {skills?.map((skill) => {
          return <CustomBadge label={skill.name} key={skill.id} />;
        })}
      </div>
      <div className="flex flex-col gap-2 justify-start items-start mt-2">
        {responsibilities?.map((responsibility) => {
          return (
            <Summary
              summary={responsibility.responsibility}
              key={responsibility.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const Skills = (skill: SkillsTools) => {
  return (
    <div className="flex items-start gap-1.5 flex-col">
      <h1 className="text-[#E2E8F0] text-[12px] font-medium">{skill.title}</h1>

      {skill.frontendRelated && (
        <div className="flex items-start gap-3">
          <p className="text-[#64748B] text-[12px] whitespace-nowrap min-w-[100px]">
            Frontend related
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {skill.frontendRelated?.map((skill) => {
              return <CustomBadge label={skill.name} key={skill.id} />;
            })}
          </div>
        </div>
      )}
      {skill.uiRelated && (
        <div className="flex items-start gap-3">
          <p className="text-[#64748B] text-[12px] whitespace-nowrap min-w-[100px]">
            UI related
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {skill.uiRelated?.map((skill) => {
              return <CustomBadge label={skill.name} key={skill.id} />;
            })}
          </div>
        </div>
      )}
      {skill.backendRelated && (
        <div className="flex items-start gap-3">
          <p className="text-[#64748B] text-[12px] whitespace-nowrap min-w-[100px]">
            Backend related
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {skill.backendRelated?.map((skill) => {
              return <CustomBadge label={skill.name} key={skill.id} />;
            })}
          </div>
        </div>
      )}
      {skill.coderRelated && (
        <div className="flex items-start gap-3">
          <p className="text-[#64748B] text-[12px] whitespace-nowrap min-w-[100px]">
            Coder related
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {skill.coderRelated?.map((skill) => {
              return <CustomBadge label={skill.name} key={skill.id} />;
            })}
          </div>
        </div>
      )}
      {skill.designerRelated && (
        <div className="flex items-start gap-3">
          <p className="text-[#64748B] text-[12px] whitespace-nowrap min-w-[100px]">
            Designer related
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {skill.designerRelated?.map((skill) => {
              return <CustomBadge label={skill.name} key={skill.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const CustomBadge = ({ label }: { label: string }) => {
  return (
    <Badge
      variant="secondary"
      className="text-[#CBD5E1] bg-[#334155] font-light hover:bg-[#334155] text-[10px]"
    >
      {label}
    </Badge>
  );
};

const Summary = ({ summary, link }: { summary: string; link?: string }) => {
  return (
    <div className="flex items-start gap-2 justify-start">
      <div>
        <div className="h-[6px] w-[6px] bg-[#CBD5E1] rounded-[5px] mt-[4px]" />
      </div>
      <p className="text-[#CBD5E1] text-[12px] font-light">
        {summary}{" "}
        {link && (
          <span className="underline inline-flex items-center gap-1">
            <BsLink45Deg /> {link}
          </span>
        )}
      </p>
    </div>
  );
};
