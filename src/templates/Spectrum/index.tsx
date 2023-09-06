import { Separator } from "@/components/ui/separator";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useAppSelector } from "@/stores/hooks";
import { selectBasicInfo } from "@/stores/slices/basic/basicInfoSlice";
import { AiOutlineLink } from "react-icons/ai";
import { BiPhone, BiSolidMap } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { selectExperience } from "@/stores/slices/experiences/experienceSlice";
import { IExperienceItem } from "@/stores/slices/experiences/interfaces";
import { formatDate } from "@/lib/utils";
import { selectEducation } from "@/stores/slices/education/educationSlice";
import { Education } from "@/stores/slices/education/interfaces";
import { selectSkills } from "@/stores/slices/skills/skillSlice";

const Spectrum = () => {
  const basicInfo = useAppSelector(selectBasicInfo);
  const experiences = useAppSelector(selectExperience);
  const education = useAppSelector(selectEducation);
  const skills = useAppSelector(selectSkills);

  const filteredProfiles = basicInfo.profiles.filter(
    (profile) => profile.network !== "Website",
  );

  const getWebsiteProfile = basicInfo.profiles.filter(
    (profile) => profile.network === "Website",
  );

  const frontendSkills = skills[0]?.frontendRelated;
  const backendSkills = skills[0]?.backendRelated;

  const coderRelated = skills[1].coderRelated;
  const designerRelated = skills[1].designerRelated;

  return (
    <div
      className="bg-[#232339] h-[100%] w-[100%] text-white overflow-hidden"
      id="resume"
    >
      <div className="flex flex-row h-[100%] w-[100%]">
        <div className="w-[30%] h-[100%] bg-[#1e1e2f] flex flex-col items-start gap-6 py-6 px-4">
          <div className="flex flex-col items-start gap-1">
            {basicInfo.profileImage && (
              <img
                src={basicInfo.profileImage}
                alt="profile"
                height={80}
                width={80}
                style={{
                  borderRadius: "50%",
                }}
              />
            )}

            <h1 className="text-[16px] text-white font-semibold">
              {basicInfo.name}
            </h1>
            <h3 className="text-[12px] text-[#D9DFE8]">{basicInfo.label}</h3>
            <p className="text-[9.5px] font-light text-[#D9DFE8] mt-2">
              {basicInfo.intro}
            </p>
          </div>
          <Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
          <div className="flex flex-col gap-5">
            {basicInfo.email && (
              <Info
                icon={<MdOutlineMailOutline className="text-[#D9DFE8]" />}
                label="Email"
                value={basicInfo.email}
              />
            )}
            {getWebsiteProfile[0]?.username && (
              <Info
                icon={<AiOutlineLink className="text-[#D9DFE8]" />}
                label="Website"
                value={basicInfo.url}
                username="salmandotweb.me"
                link
              />
            )}
            {basicInfo.phone && (
              <Info
                icon={<BiPhone className="text-[#D9DFE8]" />}
                label="Phone"
                value={basicInfo.phone}
              />
            )}
            {basicInfo.location.city && (
              <Info
                icon={<BiSolidMap className="text-[#D9DFE8]" />}
                label="Address"
                value={basicInfo.location.city}
              />
            )}
          </div>
          <Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
          <div className="flex flex-col gap-5">
            {filteredProfiles.map((profile) => {
              return (
                profile.username && (
                  <Info
                    key={profile.network}
                    image={`/images/icons/${profile.network}.svg`}
                    label={profile.network}
                    value={profile.url}
                    username={profile.username}
                    link={true}
                  />
                )
              );
            })}
          </div>
          <Separator className="h-[.080px] bg-[#D9DFE8] opacity-[10%]" />
        </div>
        <div className="w-[70%] h-[100%] bg-[#232339] py-6 px-4 flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-semi-bold">Experience</h1>
            <div className="flex flex-col items-start gap-4">
              {experiences?.map((experience) => {
                return (
                  <>
                    <Experience {...experience} key={experience.id} />
                    {experience.id !==
                      experiences[experiences.length - 1].id && (
                      <Separator className="bg-[#334155]" />
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="font-semi-bold">Education</h1>
            <div className="flex items-start gap-2 justify-between w-full">
              {education?.map((education) => {
                return <Education {...education} key={education.type} />;
              })}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="font-semi-bold">Skills</h1>
            <div className="flex items-start gap-4 w-full justify-between">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icons/frontend.svg"
                    alt="frontend"
                    height={20}
                    width={20}
                  />
                  <h3 className="text-[10px] font-light whitespace-nowrap">
                    Frontend
                  </h3>
                </div>
                <div className={`grid grid-cols-3 gap-2`}>
                  {frontendSkills?.map((skill) => {
                    return <Skill key={skill.id} skill={skill.name} />;
                  })}
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icons/backend.svg"
                    alt="frontend"
                    height={20}
                    width={20}
                  />
                  <h3 className="text-[10px] font-light whitespace-nowrap">
                    Backend
                  </h3>
                </div>
                <div className={`grid grid-cols-3 gap-2`}>
                  {backendSkills?.map((skill) => {
                    return <Skill key={skill.id} skill={skill.name} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="font-semi-bold">Tools</h1>
            <div className="flex-1 flex flex-col gap-2 w-full">
              <div className={`grid grid-cols-4 gap-2`}>
                {coderRelated?.map((skill) => {
                  return (
                    <Skill
                      key={skill.id}
                      skill={skill.name}
                      logo={skill.logo}
                      font="9px"
                    />
                  );
                })}
              </div>
              <div className={`grid grid-cols-5 gap-2`}>
                {designerRelated?.map((skill) => {
                  return (
                    <Skill
                      key={skill.id}
                      skill={skill.name}
                      logo={skill.logo}
                      font="9px"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spectrum;

const Education = ({
  institution,
  startYear,
  endYear,
  degree,
  currentlyEnrolled,
}: Education) => {
  return (
    <div className="py-3 px-4 flex flex-col items-start gap-3 bg-[#2E2E48] rounded-md w-full">
      <div className="flex items-center gap-2">
        <h3 className="text-[11px] font-light">{degree}</h3>
      </div>
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-[9px] font-light">{institution}</h3>
        <h3 className="text-[9px] text-[#ACB1C3]">
          {startYear} - {currentlyEnrolled ? "Present" : endYear}
        </h3>
      </div>
    </div>
  );
};

const Skill = ({
  skill,
  logo,
  font,
}: {
  skill: string;
  logo?: string;
  font?: string;
}) => {
  return (
    <div className="p-3 flex items-center justify-center bg-[#2E2E48] rounded-md flex-wrap w-full flex-col gap-3">
      <h3
        className={`text-[${
          font ?? "10px"
        }] font-light text-[#fff] text-center`}
      >
        {skill}
      </h3>
    </div>
  );
};

const Experience = ({
  name,
  companyLogo,
  position,
  joiningDate,
  endDate,
  currentlyWorkHere,
  responsibilities,
  location,
}: IExperienceItem) => {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col items-center gap-1 mt-[5px]">
        <div className="h-[5px] w-[5px] rounded-3xl bg-[#ACB1C3]" />
        <div className="h-[50px] w-[2px] bg-[#2E2E48]" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-[5px]">
          <h3 className="text-[8px] font-light whitespace-nowrap">
            {formatDate(new Date(joiningDate))} -{" "}
            {currentlyWorkHere
              ? "Present"
              : formatDate(new Date(endDate ?? new Date()))}
          </h3>
          {location && (
            <>
              <FaLocationDot className="w-[5px] font-light" />
              <h3 className="text-[8px] font-light whitespace-nowrap">
                {location}
              </h3>
            </>
          )}
        </div>
        <div className="flex items-start gap-2">
          {companyLogo && (
            <img src={companyLogo} height={30} width={30} alt="" />
          )}
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-[9px] font-light">{name}</h3>
            <h1 className="font-semi-bold text-[9px] whitespace-nowrap">
              {position}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 w-[65%] ml-auto">
        {responsibilities?.map((responsibility) => {
          return (
            <p className="text-[9px] font-light" key={responsibility.id}>
              {responsibility.responsibility}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const Info = ({
  icon,
  image,
  label,
  value,
  username,
  link,
}: {
  icon?: React.ReactNode;
  image?: string;
  label: string;
  value: string;
  username?: string;
  link?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[8px] w-[8px] rounded-2xl flex items-center justify-center bg-[#2E2E48] p-3 relative">
        <div>{icon}</div>
        {image && <Image src={image} alt="icon" fill />}
      </div>

      <div className="flex flex-col gap-[.5]">
        <h3 className="text-[9px] text-[#ACB1C3]">{label}</h3>
        {!link ? (
          <p className="text-[9px] font-light text-[#D9DFE8]">{value}</p>
        ) : (
          <Link
            href={value}
            className="text-[9px] font-light text-[#D9DFE8]"
            target="_blank"
          >
            {username}
          </Link>
        )}
      </div>
    </div>
  );
};
